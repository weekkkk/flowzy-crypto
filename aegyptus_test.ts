import type { Program } from "@coral-xyz/anchor";
import type { Aegyptus } from "./target/types/aegyptus";
import * as anchor from "@coral-xyz/anchor";

describe("aegyptus", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();

  anchor.setProvider(provider);

  const program = anchor.workspace.aegyptus as Program<Aegyptus>;

  it("Is initialized!", async () => {
    const [operatorAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("operator"),
      ],
      program.programId,
    );

    const initializeTx = await program.methods.initialize(0)
      .accounts({
        signer: provider.wallet.publicKey,
      })
      .signers([])
      .rpc();

    console.log("Initialize tx", initializeTx);

    const lake = 0;

    const addresses = new Map<number, anchor.web3.PublicKey>();

    for (let i = 0; i < 16; i += 1) {
      const keyPair = anchor.web3.Keypair.generate();
      const signature = await provider.connection.requestAirdrop(keyPair.publicKey, 1.5 * anchor.web3.LAMPORTS_PER_SOL);
      await provider.connection.confirmTransaction(signature);

      await program.methods.join()
        .accounts({
          signer: keyPair.publicKey,
          masterAccount: null,
        })
        .signers([keyPair])
        .rpc();

      const sequence = await activate(program, keyPair, lake);

      addresses.set(sequence, keyPair.publicKey);
    }

    console.log("Operator balance", (await provider.connection.getBalance(operatorAddress)) / anchor.web3.LAMPORTS_PER_SOL);
    for (const key of [...addresses.keys()].sort((a, b) => a - b)) {
      const balance = (await provider.connection.getBalance(addresses.get(key))) / anchor.web3.LAMPORTS_PER_SOL;

      console.log(`User balance ${key}: ${balance}`);
    }
  });
});

async function activate(program: Program<Aegyptus>, keyPair: anchor.web3.Keypair, lake: number) {
  const [lakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("lake"),
      (new anchor.BN(lake)).toArrayLike(Buffer, "le", 1),
    ],
    program.programId,
  );

  const lakeAccountData = await program.account.lakeAccountData.fetch(lakeAddress);

  const sequence = lakeAccountData.sequence + 1;

  const [userFishAddress] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("lake"),
      Buffer.from(new Uint8Array([lake])),
      Buffer.from("fish"),
      (new anchor.BN(sequence)).toArrayLike(Buffer, "le", 4),
    ],
    program.programId,
  );

  const [masterFishAddress] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("lake"),
      Buffer.from(new Uint8Array([lake])),
      Buffer.from("fish"),
      (new anchor.BN(pay_target(sequence))).toArrayLike(Buffer, "le", 4),
    ],
    program.programId,
  );

  console.log("PAYMENT", `${sequence} -> ${pay_target(sequence)}`);

  const masterFishAccountData = await program.account.fishAccountData.fetch(masterFishAddress);

  await program.methods.activate(lake)
    .accounts({
      signer: keyPair.publicKey,
      recipient: masterFishAccountData.owner,
      userFishAccount: userFishAddress,
      masterFishAccount: masterFishAddress,
      // ...
    })
    .signers([keyPair])
    .rpc();

  return sequence;
}

function pay_target(sequence: number) {
  let power: number = 1;

  while (power * 2 <= sequence) {
    power *= 2;
  }

  return sequence - power;
}
