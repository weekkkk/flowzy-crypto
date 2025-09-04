// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/eslint", "@nuxthub/core"],
  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      include: ["@coral-xyz/anchor", "@solana/web3.js", "buffer"],
      esbuildOptions: {
        target: "esnext",
      },
    },
    define: {
      "process.env": {},
      "process.env.BROWSER": true,
    },
    resolve: {
      alias: {
        buffer: "buffer",
      },
    },
  },
  components: {
    dirs: [
      {
        path: "~/src/shared",
        extendComponent(component) {
          const { pascalName } = component;
          component.pascalName = `Ui${pascalName.replaceAll("Ui", "")}`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/entities",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/entities",
        extendComponent(component) {
          const { pascalName } = component;
          component.pascalName = `${pascalName.replaceAll("Ui", "")}Feature`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/features",
        extendComponent(component) {
          const { pascalName } = component;
          component.pascalName = `${pascalName.replaceAll("Ui", "")}Feature`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/widgets",
        extendComponent(component) {
          const { pascalName } = component;
          component.pascalName = `${pascalName.replaceAll("Ui", "")}Widget`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/pages",
        extendComponent(component) {
          const { pascalName } = component;
          if (pascalName.includes("Ui"))
            component.pascalName = pascalName.replace("Ui", "Page").replaceAll("Ui", "");
          else
            component.pascalName = `${pascalName}Page`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
    ],
  },
  imports: {
    dirs: [
      "./src/shared/*/index.ts",
      "./src/entities/*/*/index.ts",
      "./src/features/*/*/index.ts",
      "./src/widgets/*/*/index.ts",
      "./src/pages/*/*/index.ts",
    ],
  },
  devtools: { enabled: true },
  css: ["~/src/app/assets/css/main.css"],
  colorMode: {
    preference: "dark",
  },
  icon: {
    customCollections: [
      {
        prefix: "fci",
        dir: "./src/app/assets/icons",
      },
    ],

  },
  fonts: {
    families: [{ name: "neuemontreal", provider: "local", global: true, weights: [300, 400, 500, 700] }],
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
    assets: "./src/app/assets",
    middleware: "./src/app/middlewares",
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      standalone: false,
    },
  },
  app: {
    head: {
      title: "Default",
      titleTemplate: "%s | Flowzy Crypto",
    },
  },
  runtimeConfig: {
    ancorProgramKey: "D4zv6uyBk6tN2oqgSuDdrktAMkeqrNtJpAYLQzRLVawV",
  },
});
