<template>
  <Table
    v-bind="tableOptions"
    :columns-data="mergedColumns"
    :data="invitations"
    :data-action-menu="actionMenuData"
    :empty-table-message="t('user.invitation.table.emptyMessage')"
    :initial-sorting="initialSorting"
    :is-loading="isLoading"
    :is-server-table="isServerTable"
    :pagination-options="{
      pageInputLabel: t('user.invitation.table.pagination.pageInputLabel'),
      itemsPerPageControlLabel: t(
        'user.invitation.table.pagination.rowsPerPage',
      ),
    }"
    :total-records="totalRecords"
    :visible-columns="visibleColumns"
    class="table-invitations"
    @action:select="onActionSelect"
    @update:request="onUpdateRequest"
  >
    <template v-if="showInviteAction" #toolbar>
      <div className="table-actions">
        <ButtonElement
          :label="t('user.invitation.table.inviteUser')"
          @click="showModal = true"
        />

        <InvitationModal
          :apps="apps"
          :expiry-mode="expiryMode"
          :roles="roles"
          :show="showModal"
          :submit-label="submitLabel"
          :title="invitationModalTitle"
          @on:close="onCloseInvitation"
          @submit="$emit('on:submitInvitation', $event)"
        />
      </div>
    </template>
  </Table>
</template>

<script lang="ts">
export default {
  name: "InvitationTable",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Table } from "@dzangolab/vue3-tanstack-table";
import {
  BadgeComponent,
  ButtonElement,
  formatDateTime,
} from "@dzangolab/vue3-ui";
import { computed, h, ref } from "vue";

import InvitationModal from "./InvitationModal.vue";
import {
  INVITATION_STATUS_ACCEPTED,
  INVITATION_STATUS_EXPIRED,
  INVITATION_STATUS_PENDING,
  INVITATION_STATUS_REVOKED,
  ROLE_ADMIN,
  ROLE_SUPERADMIN,
  ROLE_USER,
} from "../../constant";
import { useTranslations } from "../../index";

import type {
  Invitation,
  InvitationAppOption,
  InvitationRoleOption,
} from "../../types";
import type {
  SortingState,
  TableColumnDefinition,
  TableRow,
  TRequestJSON,
} from "@dzangolab/vue3-tanstack-table";
import type { PropType } from "vue";

const messages = useTranslations();

const { t } = useI18n({ messages });

const props = defineProps({
  apps: {
    default: () => [],
    type: Array as PropType<Array<InvitationAppOption>>,
  },
  columnsData: {
    default: () => [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<TableColumnDefinition<any>[]>,
  },
  expiryMode: {
    default: undefined,
    type: String,
    validator: (value: string) => ["calendar", "days"].includes(value),
  },
  initialSorting: {
    default: () => [],
    type: Array as PropType<SortingState>,
  },
  invitationModalTitle: {
    default: "",
    type: String,
  },
  invitations: {
    default: () => [],
    type: Array as PropType<Invitation[]>,
  },
  isLoading: Boolean,
  isServerTable: Boolean,
  roles: {
    default: () => [],
    type: Array as PropType<Array<InvitationRoleOption>>,
  },
  showInviteAction: {
    default: true,
    type: Boolean,
  },
  submitLabel: {
    default: undefined,
    type: String,
  },
  tableOptions: {
    default: () => ({}),
    type: Object,
  },
  totalRecords: {
    default: 0,
    type: Number,
  },
  visibleColumns: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
});

const emit = defineEmits([
  "action:delete",
  "action:resend",
  "action:revoke",
  "on:closeInvitation",
  "on:submitInvitation",
  "update:request",
]);

const showModal = ref<boolean>(false);

const actionMenuData = computed(() => [
  {
    confirmationOptions: {
      body: t("user.invitation.table.confirmation.resend.message"),
      header: t("user.invitation.table.confirmation.header"),
    },
    disabled: (invitation: Invitation) =>
      !!invitation.acceptedAt ||
      !!invitation.revokedAt ||
      isExpired(invitation.expiresAt),
    icon: "pi pi-replay",
    key: "resend",
    label: t("user.invitation.table.actions.resend"),
    requireConfirmationModal: true,
  },
  {
    class: "danger",
    confirmationOptions: {
      body: t("user.invitation.table.confirmation.revoke.message"),
      header: t("user.invitation.table.confirmation.header"),
    },
    disabled: (invitation: Invitation) =>
      !!invitation.acceptedAt ||
      !!invitation.revokedAt ||
      isExpired(invitation.expiresAt),
    icon: "pi pi-times",
    key: "revoke",
    label: t("user.invitation.table.actions.revoke"),
    requireConfirmationModal: true,
  },
  {
    class: "danger",
    confirmationOptions: {
      body: t("user.invitation.table.confirmation.delete.message"),
      header: t("user.invitation.table.confirmation.header"),
    },
    icon: "pi pi-trash",
    key: "delete",
    label: t("user.invitation.table.actions.delete"),
    requireConfirmationModal: true,
  },
]);

const appNameMap = computed(() => {
  const apps = props.apps ?? [];

  return new Map(apps.map((app) => [app.id, app.name]));
});

const defaultColumns = computed<TableColumnDefinition<Invitation>[]>(() => [
  {
    accessorKey: "email",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: "",
    header: t("user.invitation.table.defaultColumns.email"),
  },
  {
    align: "center",
    accessorKey: "appId",
    cell: ({ row }) => appNameMap.value?.get(row.original.appId) || "-",
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.app"),
    meta: {
      filterOptions: appNameMap.value
        ? Array.from(appNameMap.value.entries()).map(([id, name]) => ({
            label: name,
            value: id,
          }))
        : [],
      filterVariant: "multiselect",
    },
    sortingFn: (rowA, rowB, columnId) => {
      const appRowA = appNameMap.value.get(rowA.original.appId) || "";
      const appRowB = appNameMap.value.get(rowB.original.appId) || "";

      return appRowA.localeCompare(appRowB);
    },
  },
  {
    align: "center",
    accessorKey: "role",
    cell: ({ getValue, row: original }) => {
      const roles = (original as unknown as { roles: string[] })?.roles;
      if (Array.isArray(roles)) {
        return roles.map((role, index) =>
          h(BadgeComponent, {
            label: role,
            severity: role === ROLE_ADMIN ? "primary" : "success",
            fullWidth: true,
            key: role + index,
          }),
        );
      }
      const role = getValue() as string;
      return h(BadgeComponent, {
        label: role,
        severity: role === ROLE_ADMIN ? "primary" : "success",
        fullWidth: true,
      });
    },
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.role"),
    meta: {
      filterVariant: "multiselect",
      filterOptions: [
        {
          label: t("user.table.role.admin"),
          value: ROLE_ADMIN,
        },
        {
          label: t("user.table.role.superadmin"),
          value: ROLE_SUPERADMIN,
        },
        {
          label: t("user.table.role.user"),
          value: ROLE_USER,
        },
      ],
    },
  },
  {
    accessorFn: (original: Invitation) => {
      return (
        (original?.invitedBy?.givenName ? original?.invitedBy?.givenName : "") +
          (original?.invitedBy?.middleNames
            ? " " + original?.invitedBy?.middleNames
            : "") +
          (original?.invitedBy?.surname
            ? " " + original?.invitedBy?.surname
            : "") || "-"
      );
    },
    accessorKey: "invitedBy",
    cell: ({ getValue }) => getValue(),
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.invitedBy"),
  },
  {
    accessorKey: "expiresAt",
    cell: ({ getValue }) => formatDateTime(getValue() as string),
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.expiresAt"),
    meta: {
      filterVariant: "dateRange",
      serverFilterFn: "between",
    },
  },
  {
    align: "center",
    accessorKey: "status",
    enableColumnFilter: !props.isServerTable,
    enableSorting: !props.isServerTable,
    filterFn: (row, columnId, filterValue) => {
      const { acceptedAt, revokedAt, expiresAt } = row.original;

      if (!filterValue || filterValue.length === 0) {
        return true;
      }

      let status = INVITATION_STATUS_PENDING;

      if (acceptedAt) {
        status = INVITATION_STATUS_ACCEPTED;
      } else if (revokedAt) {
        status = INVITATION_STATUS_REVOKED;
      } else if (isExpired(expiresAt)) {
        status = INVITATION_STATUS_EXPIRED;
      }

      return filterValue.includes(status);
    },
    header: t("user.invitation.table.defaultColumns.status"),
    cell: ({ row }) => {
      const { acceptedAt, revokedAt, expiresAt } = row.original;
      const label = getStatusLabel(row);
      const severity = acceptedAt
        ? "success"
        : revokedAt
          ? "danger"
          : isExpired(expiresAt)
            ? "secondary"
            : "warning";
      return h(BadgeComponent, { label, severity });
    },
    meta: {
      filterVariant: "multiselect",
      filterOptions: [
        {
          label: t("user.invitation.table.status.accepted"),
          value: INVITATION_STATUS_ACCEPTED,
        },
        {
          label: t("user.invitation.table.status.revoked"),
          value: INVITATION_STATUS_REVOKED,
        },
        {
          label: t("user.invitation.table.status.expired"),
          value: INVITATION_STATUS_EXPIRED,
        },
        {
          label: t("user.invitation.table.status.pending"),
          value: INVITATION_STATUS_PENDING,
        },
      ],
    },
    sortingFn: (rowA, rowB, columnId) => {
      return getStatusLabel(rowA).localeCompare(getStatusLabel(rowB));
    },
  },
]);

const mergedColumns = computed(() => [
  ...defaultColumns.value.map((defaultColumn) => {
    const override = props.columnsData.find(
      (column) => column.accessorKey === defaultColumn.accessorKey,
    );
    return override ? { ...defaultColumn, ...override } : defaultColumn;
  }),
  ...props.columnsData.filter(
    (column) =>
      !defaultColumns.value.some(
        (defaultColumn) => defaultColumn.accessorKey === column.accessorKey,
      ),
  ),
]);

const isExpired = (date?: string | Date | number) => {
  return !!(date && new Date(date) < new Date());
};

const getStatusLabel = (row: TableRow<Invitation>) => {
  const { acceptedAt, expiresAt, revokedAt } = row.original;

  if (acceptedAt) {
    return t("user.invitation.table.status.accepted");
  } else if (revokedAt) {
    return t("user.invitation.table.status.revoked");
  } else if (isExpired(expiresAt)) {
    return t("user.invitation.table.status.expired");
  }

  return t("user.invitation.table.status.pending");
};

const onActionSelect = (rowData: { action: string; data: Invitation }) => {
  switch (rowData.action) {
    case "delete":
      emit("action:delete", rowData.data);
      break;
    case "resend":
      emit("action:resend", rowData.data);
      break;
    case "revoke":
      emit("action:revoke", rowData.data);
      break;
  }
};

const onCloseInvitation = () => {
  showModal.value = false;

  emit("on:closeInvitation");
};

const onUpdateRequest = (invitationRequest: TRequestJSON) => {
  emit("update:request", invitationRequest);
};

defineExpose({
  showModal,
});
</script>

<style lang="css">
@import "../../assets/css/invitations-table.css";
</style>
