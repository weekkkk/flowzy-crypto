import type { UserGetStatReqDto, UserGetStatResDto } from "./interfaces";
// import { SolanaService } from "~/src/shared/lib/solana";
import { $user } from "./point";

export class UserService {
  static async getStat(req: UserGetStatReqDto): Promise<UserGetStatResDto> {
    const res = await $user<UserGetStatResDto>(`/get-stat?userId=${req.userId}`, {
      method: "GET",
    });
    return res;

    // const { program } = SolanaService.getInstance(wallet);

    // const [universeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
    //   [],
    //   program.programId,
    // );

    // const universeAccountData = await program.account.universeAccountData.fetch(universeAddress);

    // return {
    //   income: universeAccountData.transactionSum / anchor.web3.LAMPORTS_PER_SOL,
    //   partners: universeAccountData.transactionCount,
    //   partnershipIncome: universeAccountData.transactionCount,
    // };
    // // 1.1.1
    // console.log("Total participants", universeAccountData.userCount);
    // // 1.1.2
    // console.log("Total transactions", universeAccountData.transactionCount);
    // // 1.1.3
    // console.log("SOL turnover", universeAccountData.transactionSum / anchor.web3.LAMPORTS_PER_SOL);
  }
}
