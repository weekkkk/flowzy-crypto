export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "rounded-full disabled:opacity-100 aria-disabled:opacity-100",
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
          class: "text-(--ui-text) bg-linear-270 from-(--ui-primary) to-(--ui-secondary) disabled:bg-neutral-400/60 aria-disabled:bg-neutral-400/60 aria-disabled:bg-none disabled:bg-none",
        },
        {
          color: "neutral",
          class: "hover:bg-neutral-800 hover:text-neutral-200",
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
        overlay: "bg-neutral-900/95",
        content: "bg-neutral-800 rounded-3xl max-h-189",
        header: "p-0 sm:px-0",
        body: "p-0 sm:p-0",
        footer: "p-0 sm:p-0",
      },
      variants: {
        fullscreen: {
          false: {
            content: "max-w-167 md:rounded-3xl p-12.5 shadow-none max-md:w-full max-md:max-h-full max-md:h-full max-md:p-5",
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
    progress: {
      slots: {
        base: "rounded",
        indicator: "rounded",
      },
      variants: {
        color: {
          neutral: {
            indicator: "neutral-500 opacity-50",
          },
          primary: {
            indicator: "bg-[linear-gradient(90deg,_var(--ui-primary)_0%,_var(--ui-primary)_50%,_var(--ui-secondary)_100%)]",
          },
        },
      },
      compoundVariants: [{
        class: "h-5 max-md:h-3",
      }],
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
