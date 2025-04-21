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
    separator: {
      variants: {
        color: {
          crayola: {
            border: "border-(--ui-color-neutral-400)",
          },
        },
      },
    },
    input: {
      slots: {
        base: "placeholder:text-ui-color-neutral-400 rounded-3xl",
      },
      variants: {
        variant: {
          soft: "bg-(--ui-color-neutral-700)",
        },
        size: {
          md: {
            base: "text-2xl py-5.5 pl-5.5 pr-0.25",
            trailing: "pe-0",
          },
        },
      },
    },
    select: {
      slots: {
        base: "rounded-3xl data-[state=open]:rounded-b-none transition-all cursor-pointer",
        group: "py-0 px-0 bg-(--ui-color-neutral-700)",
        content: "data-[state=open]:rounded-t-none overflow-auto shadow-none data-[state=open]:rounded-b-3xl data-[state=open]:overflow-auto ring-0",
        item: "border-solid border-(--ui-color-neutral-400)/18 border-t",
      },
      variants: {
        size: {
          md: {
            base: "text-xl px-5",
            item: "text-xl px-5 py-3.5",
            trailing: "pe-5",
          },
        },
        variant: {
          soft: "bg-(--ui-color-neutral-700) ring-transparent",
        },
      },
    },
  },
});
