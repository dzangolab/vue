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
          :initial-sorting="[{ id: 'email', desc: false }]"
          :invitation-modal-title="$t('user.label.inviteUser')"
          :invitations="invitations"
          :visible-columns="visibleColumns"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationTable
              :initial-sorting="[{ id: 'email', desc: false }]"
              :invitations="invitations"
              invitation-modal-title="Invite a user" 
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationTable } from "@dzangolab/vue3-user";

          import { invitations } from "../Table/data";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UserPage>
</template>

<script setup lang="ts">
import { ButtonElement } from "@dzangolab/vue3-ui";
import { InvitationTable } from "@dzangolab/vue3-user";

import UserPage from "./UserPage.vue";
import { invitations } from "../Table/data";

const visibleColumns = [
  "email",
  "app",
  "role",
  "invitedBy",
  "expiresAt",
  "status",
];
</script>
