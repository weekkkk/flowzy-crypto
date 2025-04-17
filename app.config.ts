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
            trigger: "text-lg py-5 px-7.5 max-md:p-0",
          },
        },
        variant: {
          pill: {
            trigger: "w-37.5 max-md:flex max-md:justify-center",
            indicator: "rounded-4xl",
            list: "rounded-4xl max-md:bg-transparent max-md:gap-6",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "pill",
          class: {
            trigger: "data-[state=active]:text-white max-md:data-[state=active]:text-transparent font-medium max-md:data-[state=active]:bg-gradient-to-r max-md:data-[state=active]:from-secondary-400 max-md:data-[state=active]:to-primary-400 max-md:data-[state=active]:bg-clip-text max-md:data-[state=active]:w-max max-md:text-3xl",
            indicator: "bg-linear-470 primary-gradient max-md:bg-transparent max-md:h-0",
          },
        },
      ],
    },
    modal: {
      slots: {
        overlay: "bg-neutral-900  opacity-90",
        content: "bg-neutral-800 rounded-3xl",
        close: "absolute -top-9.5 -right-9.5 p-4.5 text-2xl text-(--ui-text) bg-linear-270 from-(--ui-primary) to-(--ui-secondary)",
      },
      variants: {
        fullscreen: {
          false: {
            content: "max-w-167",
          },
        },
      },
    },
    separator: {
      variants: {
        color: {
          crayola: {
            border: "border-(--ui-color-neutral-400)",
          },
        },
      },
    },
  },
});
