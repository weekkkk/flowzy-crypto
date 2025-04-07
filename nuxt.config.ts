// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/eslint"],
  components: {
    dirs: [
      {
        path: "~/src/shared",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = `Ui${component.pascalName}`;
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
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = `${component.pascalName}Feature`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/features",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = `${component.pascalName}Feature`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/widgets",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = `${component.pascalName}Widget`;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/pages",
        extendComponent(component) {
          component.pascalName = `${component.pascalName}Page`;
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
  fonts: {
    families: [{ name: "neuemontreal", provider: "local", global: true }],
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
    assets: "./src/app/assets",
    middleware: "./src/app/middlewares",
    app: "./src/app/app",
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
});
