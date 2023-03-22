<template>
  <Page :title="$t('password.title')">
    <section>
      <h2>{{ $t("password.contents.basic") }}</h2>

      <form>
        <Password />
      </form>
    </section>

    <section>
      <h2>{{ $t("password.contents.withSlot.title") }}</h2>
      <p>{{ $t("password.contents.withSlot.description") }}</p>

      <form>
        <Password>
          <template #active-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
              />
            </svg>
          </template>
          <template #inactive-icon>
            <svg
              fill="#000000"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2">
                <g data-name="eye-off-2">
                  <rect width="24" height="24" opacity="0" />

                  <path
                    d="M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24 7.07 7.07 0 0 1-14 0 1 1 0 1 0-2 .24 8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9.06 9.06 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9.06 9.06 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41z"
                  />
                </g>
              </g>
            </svg>
          </template>
        </Password>
      </form>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Password",
};
</script>

<script setup lang="ts">
import { Password } from "@dzangolab/vue3-form";
</script>

<style scoped>
section > p {
  margin-bottom: 1rem;
}

.field {
  flex-direction: row;
  align-items: center;
}
</style>
