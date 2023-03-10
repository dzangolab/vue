<template>
  <Password :label="label.password" name="password" />

  <Password :label="label.confirmation" name="confirmation" />
</template>

<script lang="ts">
export default {
  name: "PasswordConfirmation",
};
</script>

<script setup lang="ts">
import { Password } from "@dzangolab/vue3-form";

defineProps({
  label: {
    default: () => {
      return {
        password: "Password",
        confirmation: "Confirmation",
      };
    },
    type: Object,
    required: true,
  },
});
</script>
