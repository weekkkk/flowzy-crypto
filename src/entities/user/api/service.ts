import type { UserGetStatResDto } from "./interfaces";
// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from "buffer";

export class UserService {
  static getStat: SolanaMethod<UserGetStatResDto> = async ({ anchor, program, wallet }) => {
    const [userAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("user"),
        wallet.publicKey.toBuffer(),
      ],
      program.programId,
    );

    const userAccountData = await program.account.userAccountData.fetch(userAddress);

    return {
      income: (userAccountData.lakeIncome + userAccountData.slaveIncome) / anchor.web3.LAMPORTS_PER_SOL,
      partnershipIncome: userAccountData.slaveIncome / anchor.web3.LAMPORTS_PER_SOL,
      partners: userAccountData.slaveCount,
    };
  };
}
