<template>
  <DropdownUserMenu
    v-if="user"
    class="user-menu"
    :user="user"
    @logout="handleLogout"
  />
  <SignInUpMenu v-else class="user-menu" />
</template>

<script lang="ts">
export default {
  name: "UserMenu",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import DropdownUserMenu from "./DropdownUserMenu.vue";
import SignInUpMenu from "./SignInUpMenu.vue";
import useUserStore from "../store";

import type { AppConfig } from "@dzangolab/vue3-config";
const config = useConfig() as AppConfig;

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const { logout } = userStore;

const router = useRouter();

const handleLogout = async () => {
  await logout(config.apiBaseUrl);

  router.push({ name: "login" });
};
</script>
