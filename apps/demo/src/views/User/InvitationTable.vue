<template>
  <UserPage
    :title="$t('user.label.invitationTable')"
    class="demo-invitation-table"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/user')"
      />
    </template>

    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <InvitationTable
          id="invitation-table"
          :apps="apps"
          :columns-data="[
            {
              accessorKey: 'invitedBy',
              maxWidth: '20rem',
              minWidth: '20rem',
              width: '20rem',
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :invitation-modal-title="$t('user.label.inviteUser')"
          :invitations="invitations"
          :visible-columns="visibleColumns"
          persist-state
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationTable
              id="invitation-table"
              :apps="apps"
              :columns-data="[{
                accessorKey: 'invitedBy',
                maxWidth: '20rem',
                minWidth: '20rem',
                width: '20rem',
              }]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :invitations="invitations"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite a user"
              persist-state
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationTable } from "@prefabs.tech/vue3-user";

          import { invitations } from "../Table/data";

          const visibleColumns = [
            "email",
            "appId",
            "role",
            "invitedBy",
            "expiresAt",
            "status",
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UserPage>
</template>

<script setup lang="ts">
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { InvitationTable } from "@prefabs.tech/vue3-user";

import { apps } from "./data";
import UserPage from "./UserPage.vue";
import { invitations } from "../Table/data";

const visibleColumns = [
  "email",
  "appId",
  "role",
  "invitedBy",
  "expiresAt",
  "status",
];
</script>
