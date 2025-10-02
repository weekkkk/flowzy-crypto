import type { Program } from "@coral-xyz/anchor";
import type { AnchorWallet } from "solana-wallets-vue";
import type { MultiWatchSources } from "vue";
import type { SolanaAnchor } from "../types";
import type { Aegyptus } from "~/target/types/aegyptus";

export interface SolanaMethodParams {
  anchor: SolanaAnchor;
  program: Program<Aegyptus>;
  wallet: AnchorWallet;
  partner: string | null;
}

export type SolanaMethod<R, P extends any[] = []> = (defaultParams: SolanaMethodParams, ...args: P) => Promise<R>;

interface UseSolanaMethodParams<
  R,
  D extends R | undefined = undefined,
  P extends [] = [],
> {
  key: string;
  f: SolanaMethod<R, P>;
  default?: D;
  watch?: MultiWatchSources;
  immediate?: boolean;
}

export function useSolanaMethod<
  R,
  D extends R | undefined = undefined,
  P extends [] = [],
>({
  key,
  f,
  default: defaultValue,
  watch,
  immediate,
}: UseSolanaMethodParams<R, D, P>, ...args: P) {
  const { $solana: { program, anchor, wallet, partner } } = useNuxtApp();

  return useAsyncData(
    key,
    async () => {
      if (!program.value || !wallet.value)
        throw new Error("Нет program");
      return f({
        anchor,
        program: program.value,
        wallet: wallet.value,
        partner: partner.value,
      }, ...args);
    },
    {
      server: false,
      immediate: typeof immediate === "undefined" ? !!program.value : !!program.value && immediate,
      watch: !watch ? [program] : [program, ...watch],
      default: () => defaultValue as D,
    },
  );
}
