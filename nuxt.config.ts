// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/eslint"],
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
    assets: "./src/app/assets",
    middleware: "./src/app/middlewares",
    app: "./src/app/app",
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
  components: {
    dirs: [
      {
        path: "~/src/shared",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = "Ui" + component.pascalName;
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
          component.pascalName = component.pascalName + "Feature";
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/features",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = component.pascalName + "Feature";
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/widgets",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = component.pascalName + "Widget";
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/pages",
        extendComponent(component) {
          component.pascalName = component.pascalName + "Page";
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
    ],
  },
});
