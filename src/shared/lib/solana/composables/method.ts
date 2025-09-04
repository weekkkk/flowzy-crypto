import type { Program } from "@coral-xyz/anchor";
import type { AnchorWallet } from "solana-wallets-vue";
import type { SolanaAnchor } from "../types";
import type { Aegyptus } from "~/target/types/aegyptus";

export interface SolanaMethodParams {
  anchor: SolanaAnchor;
  program: Program<Aegyptus>;
  wallet: AnchorWallet;
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
}

export function useSolanaMethod<
  R,
  D extends R | undefined = undefined,
  P extends [] = [],
>({
  key,
  f,
  default: defaultValue,
}: UseSolanaMethodParams<R, D, P>, ...args: P) {
  const { $solana: { program, anchor, wallet } } = useNuxtApp();

  return useAsyncData(
    key,
    async () => {
      if (!program.value || !wallet.value)
        throw new Error("Нет program");
      return f({
        anchor,
        program: program.value,
        wallet: wallet.value,
      }, ...args);
    },
    {
      server: false,
      immediate: !!program.value,
      watch: [program],
      default: () => defaultValue as D,
    },
  );
}
