import type { AnchorWallet } from "solana-wallets-vue";
import type {
  ActivateGameLevelReqDto,
  ActivateGameLevelResDto,
  GameLevelGetInfoReqDto,
  GameLevelGetInfoResDto,
  GameLevelShortDto,
  GameLevelsReqDto,
} from "./interfaces";
import type { Aegyptus } from "~/target/types/aegyptus";
// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from "buffer";
import * as anchor from "@coral-xyz/anchor";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import IDL from "~/target/idl/aegyptus.json";
import { GameLevelStatusEnum } from "./enums";
import { $gameLevel } from "./point";

export class GameLevelService {
  /** Получить игровые уровни */
  static async getGameLevels() {
    const response = await $gameLevel<GameLevelsReqDto>("/get-game-levels", {
      method: "GET",
    });
    return response;
  }

  /** Получить информацию игрового уровня */
  static async getInfo(req: GameLevelGetInfoReqDto) {
    const response = await $gameLevel<GameLevelGetInfoResDto>(`/get-game-info?${req.id}`, {
      method: "GET",
    });
    return response;
  }

  /** Активировать игровой уровень */
  static async activateGameLevel(req: ActivateGameLevelReqDto) {
    const response = await $gameLevel<ActivateGameLevelResDto>(`/activate-game-level?${req.id}`);
    return response;
  }

  static LEVELS_COUNT = 16;
  static LEVEL_PRICE_LIST = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
  ];

  static get ids(): number[] {
    const ids: number[] = [];
    for (let i = 0; i < this.LEVELS_COUNT; i++) {
      ids.push(i);
    }
    return ids;
  }

  static async getShortList(wallet: AnchorWallet): Promise<GameLevelShortDto[]> {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const provider = new anchor.AnchorProvider(
      connection,
      wallet,
      {},
    );
    const program = new anchor.Program<Aegyptus>(IDL, provider);

    return Promise.all(
      this.ids.map<
        Promise<GameLevelShortDto>
      >(async (id) => {
        const [lakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
          [
            Buffer.from("lake"),
            (new anchor.BN(id)).toArrayLike(Buffer, "le", 1),
          ],
          program.programId,
        );
        let status: GameLevelStatusEnum;
        try {
          const lakeAccountData = await program.account.lakeAccountData.fetch(lakeAddress);
          // console.log({ lakeAccountData });
          status = GameLevelStatusEnum.Default;
        }
        catch {
          status = GameLevelStatusEnum.Error;
        }

        // console.log(status);

        return {
          id,
          level: id + 1,
          price: this.LEVEL_PRICE_LIST[id],
          status,
          partnerBonus: 0,
          profitLevel: 0,
          progress: 0,
          userEarnings: [],
        };
      }),
    );
  }
}
