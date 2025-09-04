import type { StatGetGeneralResDto, StatGetRecentResDto } from "./interfaces";
import { $stat } from "./point";

export class StatService {
  static getGeneral: SolanaMethod<StatGetGeneralResDto> = async ({ program, anchor }) => {
    const [universeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [],
      program.programId,
    );

    const universeAccountData = await program.account.universeAccountData.fetch(universeAddress);

    return {
      solTurnover: {
        value: universeAccountData.transactionSum / anchor.web3.LAMPORTS_PER_SOL,
        profit: 0,
      },
      totalParticipants: {
        value: universeAccountData.userCount,
        profit: 0,
      },
      totalTransactions: {
        value: universeAccountData.transactionCount,
        profit: 0,
      },
    };
  };

  static async getRecent() {
    const res = await $stat<StatGetRecentResDto>("/get-recent-stat");
    return res;
  }
}
