import type { ReferalGetLinkResDto, ReferalGetStatResDto } from "./interfaces";
import { Buffer } from "node:buffer";

export class ReferralService {
  static getLink: SolanaMethod<ReferalGetLinkResDto> = async ({ anchor, program, wallet }) => {
    const [userAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("user"),
        wallet.publicKey.toBuffer(),
      ],
      program.programId,
    );

    return {
      token: userAddress.toBase58(),
    };
  };

  static getStat: SolanaMethod<ReferalGetStatResDto> = async (...args) => {
    const { partners, partnershipIncome } = await UserService.getStat(...args);
    return {
      info: {
        countPartners: partners,
        referralBonus: partnershipIncome,
        lostProfits: 0,
      },
    };
  };
}
