// import type { AnchorWallet } from "solana-wallets-vue";
import type { StatGetGeneralResDto, StatGetRecentResDto } from "./interfaces";
// import * as anchor from "@coral-xyz/anchor";
// import { SolanaService } from "~/src/shared/lib/solana";
import { $stat } from "./point";

export class StatService {
  static async getGeneral(): Promise<StatGetGeneralResDto> {
    const res = await $stat<StatGetGeneralResDto>("/get-general-stat");
    return res;
    // const { program } = SolanaService.getInstance(wallet);

    // const [universeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
    //   [],
    //   program.programId,
    // );

    // const universeAccountData = await program.account.universeAccountData.fetch(universeAddress);

    // return {
    //   solTurnover: {
    //     value: universeAccountData.transactionSum / anchor.web3.LAMPORTS_PER_SOL,
    //     profit: 0,
    //   },
    //   totalParticipants: {
    //     value: universeAccountData.userCount,
    //     profit: 0,
    //   },
    //   totalTransactions: {
    //     value: universeAccountData.transactionCount,
    //     profit: 0,
    //   },
    // };
  }

  static async getRecent() {
    const res = await $stat<StatGetRecentResDto>("/get-recent-stat");
    return res;
  }
}
