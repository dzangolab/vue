<template>
  <Table
    :columns-data="[...defaultColumns, ...columnsData]"
    :data="invitations"
    :initial-sorting="initialSorting"
    :visible-columns="visibleColumns"
  >
    <template v-if="showInviteAction" #toolbar>
      <div className="table-actions">
        <ButtonElement
          :label="t('user.table.inviteUser')"
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
import { h, ref } from "vue";

import InvitationModal from "./InvitationModal.vue";
import { ROLE_ADMIN } from "../../constant";
import { useTranslations } from "../../index";

import type {
  Invitation,
  InvitationAppOption,
  InvitationRoleOption,
  UserType,
} from "../../types";
import type {
  SortingState,
  TableColumnDefinition,
} from "@dzangolab/vue3-tanstack-table";
import type { PropType } from "vue";

const messages = useTranslations();

const { t } = useI18n({ messages });

defineProps({
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
  visibleColumns: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
});

const emit = defineEmits(["on:closeInvitation", "on:submitInvitation"]);

const defaultColumns: TableColumnDefinition<Invitation>[] = [
  {
    accessorKey: "email",
    enableSorting: true,
    header: t("user.table.defaultColumns.email"),
  },
  {
    align: "center",
    accessorKey: "app",
    header: t("user.table.defaultColumns.app"),
    cell: ({ row }) => row.original.appId || "—",
  },
  {
    accessorKey: "role",
    header: t("user.table.defaultColumns.role"),
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
  },
  {
    accessorKey: "invitedBy",
    header: t("user.table.defaultColumns.invitedBy"),
    cell: ({ getValue }) => {
      const invitedBy = getValue() as UserType;
      if (!invitedBy) {
        return "—";
      }

      return invitedBy.givenName || invitedBy.surname
        ? `${invitedBy.givenName} ${invitedBy.surname}`
        : invitedBy.email;
    },
  },
  {
    align: "center",
    accessorKey: "status",
    header: t("user.table.defaultColumns.status"),
    cell: ({ row }) => {
      const { acceptedAt, revokedAt, expiresAt } = row.original;
      const label = acceptedAt
        ? t("user.table.status.accepted")
        : revokedAt
          ? t("user.table.status.revoked")
          : isExpired(expiresAt)
            ? t("user.table.status.expired")
            : t("user.table.status.pending");
      const severity = acceptedAt
        ? "success"
        : revokedAt
          ? "danger"
          : isExpired(expiresAt)
            ? "secondary"
            : "warning";
      return h(BadgeComponent, { label, severity });
    },
  },
  {
    accessorKey: "expiresAt",
    header: t("user.table.defaultColumns.expiresAt"),
    cell: ({ getValue }) => formatDateTime(getValue() as string),
  },
];

const showModal = ref<boolean>(false);

const isExpired = (date?: string | Date | number) => {
  return !!(date && new Date(date) < new Date());
};

const onCloseInvitation = () => {
  showModal.value = false;

  emit("on:closeInvitation");
};
</script>
