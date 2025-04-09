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
    tabs: {
      slots: {
        root: "gap-0",
        label: "text-clip whitespace-nowrap",
      },
      variants: {
        size: {
          md: {
            trigger: "text-lg py-5 px-7.5",
          },
        },
        variant: {
          pill: {
            trigger: "w-37.5",
            indicator: "rounded-4xl",
            list: "rounded-4xl",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "pill",
          class: {
            trigger: "data-[state=active]:text-white font-medium",
            indicator: "bg-linear-470 primary-gradient",
          },
        },
      ],
    },
  },
});
