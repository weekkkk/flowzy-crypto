export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "rounded-full",
      },
      size: {
        md: {
          base: "px-2.5 py-1.5 text-sm gap-1.5",
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: "text-(--ui-text) bg-linear-270 from-(--ui-primary) to-(--ui-secondary)",
        },
      ],
    },
  },
});
