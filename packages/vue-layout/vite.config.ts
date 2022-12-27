import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    build: {
      lib: {
        entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
        fileName: (format) => `DzangolabVue3Layout.${format}.js`,
        name: "@dzangolab/vue3-layout",
      },
      rollupOptions: {
        external: [
          "@dzangolab/vue3-config",
          "@dzangolab/vue3-i18n",
          "@dzangolab/vue3-ui",
          "vue",
          "vue-router",
        ],
        output: {
          exports: "named",
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            "@dzangolab/vue3-config": "DzangolabVue3Config",
            "@dzangolab/vue3-i18n": "DzangolabVue3I18n",
            "@dzangolab/vue3-ui": "DzangolabVue3UI",
            vue: "Vue",
            "vue-router": "VueRouter",
          },
        },
      },
      target: "esnext",
    },
    plugins: [
      vue({
        reactivityTransform: true,
      }),
    ],
    resolve: {
      alias: {
        "@/": new URL("./src/", import.meta.url).pathname,
      },
    },
    test: {
      coverage: {
        provider: "istanbul",
        reporter: ["text", "json", "html"],
      },
    },
  };
});
