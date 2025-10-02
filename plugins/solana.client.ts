import type { Program } from "@coral-xyz/anchor";
import type { AnchorWallet } from "solana-wallets-vue";
import type { SolanaAnchor } from "~/src/shared/lib";
import type { Aegyptus } from "~/target/types/aegyptus";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import IDL from "~/target/idl/aegyptus.json";

export default defineNuxtPlugin(async () => {
  const anchor: SolanaAnchor = await import("@coral-xyz/anchor");

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const program = ref<NoInfer<Program<Aegyptus> | null>>(null);

  const wallet = ref<AnchorWallet | null>(null);

  const partner = ref<string | null>(null);

  return {
    provide: {
      solana: {
        init(_wallet: AnchorWallet, _partner: string | null = null) {
          wallet.value = _wallet;
          const provider = new anchor.AnchorProvider(
            connection,
            _wallet,
            {},
          );
          anchor.setProvider(provider);
          program.value = new anchor.Program<Aegyptus>(IDL, provider);
          partner.value = _partner;
        },
        destroy() {
          wallet.value = null;
          program.value = null;
          partner.value = null;
        },
        anchor,
        program,
        wallet,
        partner,
      },
    },
  };
});
