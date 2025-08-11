<script setup lang="ts">
import type { AnchorWallet } from "solana-wallets-vue";
import type { Aegyptus } from "~/target/types/aegyptus";
import * as anchor from "@coral-xyz/anchor";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useAnchorWallet } from "solana-wallets-vue";
import IDL from "~/target/idl/aegyptus.json";

const wallet = useAnchorWallet();

async function test() {
  console.log(wallet.value?.publicKey.toBase58());

  if (!wallet.value)
    return;

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const provider = new anchor.AnchorProvider(
    connection,
    wallet.value,
    {},
  );
  const program = new anchor.Program<Aegyptus>(IDL, provider);

  // const [operatorAddress] = anchor.web3.PublicKey.findProgramAddressSync(
  //   [
  //     Buffer.from("operator"),
  //   ],
  //   program.programId,
  // );

  const initializeTx = await program.methods.initialize(0)
    .accounts({
      signer: provider.wallet.publicKey,
    })
    .signers([])
    .rpc();

  console.log("Initialize tx", initializeTx);

  // const [operatorAddress] = anchor.web3.PublicKey.findProgramAddressSync(
  //   [
  //     Buffer.from("operator"),
  //   ],
  //   program.programId,
  // );

  console.log(program.programId.toBase58());

  const [lakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("lake"),
      (new anchor.BN(0)).toArrayLike(Buffer, "le", 1),
    ],
    program.programId,
  );

  const lakeAccountData = await program.account.lakeAccountData.fetch(lakeAddress);

  console.log(lakeAccountData);
}

onMounted(() => {
  test();
  // test();
});
</script>

<template>
  <div class="grid grid-cols-5 gap-x-10 max-md:grid-cols-2 gap-y-8 max-md:gap-2.5 md:bg-neutral-800 rounded-5xl md:py-12.5 md:px-12">
    <!-- <GameLevelCard v-for="item in data?.info" :key="item.id" :info="item" /> -->
  </div>
</template>
