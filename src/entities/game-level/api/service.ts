import type { web3 } from "@coral-xyz/anchor";
import type {
  ActivateGameLevelReqDto,
  ActivateGameLevelResDto,
  GameLevelGetInfoReqDto,
  GameLevelGetInfoResDto,
  GameLevelShortDto,
  GameLevelsReqDto,
} from "./interfaces";
// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from "buffer";
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

  /** Активировать игровой уровень */
  static async activateGameLevel(req: ActivateGameLevelReqDto) {
    const response = await $gameLevel<ActivateGameLevelResDto>(`/activate-game-level?${req.id}`);
    return response;
  }

  static k = 0;

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
    17,
    18,
    19,
    20,
    21,
    22,
  ];

  static get ids(): number[] {
    const ids: number[] = [];
    for (let i = this.LEVELS_COUNT + this.k - 1; i >= this.k; i--) {
      ids.push(i);
    }
    return ids;
  }

  static initialize: SolanaMethod<void, [lake: number]> = async ({
    anchor,
    program,
    wallet,
  }, lake) => {
    await program.methods.initialize(lake, new anchor.BN(Date.now() + (lake - this.k) * (60 * 60 * 1000)))
      .accounts({
        signer: wallet.publicKey,
      })
      .signers([])
      .rpc();
  };

  static getStatus: SolanaMethod<GameLevelStatusEnum, [lake: number]> = async ({
    anchor,
    program,
    wallet,
  }, lake) => {
    try {
      const [lakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("lake"),
          (new anchor.BN(lake)).toArrayLike(Buffer, "le", 1),
        ],
        program.programId,
      );
      // const lakeAccountDataNullable = await program.account.lakeAccountData.fetchNullable(lakeAddress);
      // if (!lakeAccountDataNullable) {
      // await this.initialize({ anchor, program, wallet }, lake);
      // }
      // const lakeAccountData = lakeAccountDataNullable ?? await program.account.lakeAccountData.fetch(lakeAddress);
      const lakeAccountData = await program.account.lakeAccountData.fetch(lakeAddress);

      if (Date.now() < lakeAccountData.activeSinceUnixTimestamp) {
      // console.log("Unavailable");
        return GameLevelStatusEnum.Unavailable;
      }

      const [userAddress] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("user"),
          wallet.publicKey.toBuffer(),
        ],
        program.programId,
      );

      const [userLakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("user"),
          wallet.publicKey.toBuffer(),
          Buffer.from("lake"),
          (new anchor.BN(lake)).toArrayLike(Buffer, "le", 1),
        ],
        program.programId,
      );

      const userLakeAccountData = await program.account.userLakeAccountData.fetchNullable(userLakeAddress);

      const userAccountDataNullable = await program.account.userAccountData.fetchNullable(userAddress);

      if (!userAccountDataNullable) {
        await this.join({ anchor, program, wallet }, null);
      }
      const userAccountData = userAccountDataNullable ?? await program.account.userAccountData.fetch(userAddress);

      if (userLakeAccountData == null) {
      // console.log("Not active");
        return GameLevelStatusEnum.Default;
      }

      const [fishAddress] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("lake"),
          Buffer.from(new Uint8Array([lake])),
          Buffer.from("fish"),
          (new anchor.BN(userLakeAccountData.firstSequence)).toArrayLike(Buffer, "le", 4),
        ],
        program.programId,
      );

      const fishAccountData = await program.account.fishAccountData.fetch(fishAddress);

      if (fishAccountData.paymentCount === 0) {
      // console.log("Waiting");
        return GameLevelStatusEnum.Awaiting;
      }
      else if (userAccountData.lastLake > lake || fishAccountData.paymentCount < 2) {
      // console.log("Active");
        return GameLevelStatusEnum.Active;
      }
      else {
      // console.log("Freezed");
        return GameLevelStatusEnum.Freeze;
      }
    }
    catch {
      return GameLevelStatusEnum.Error;
    }
  };

  static progress: SolanaMethod<[number, number], [lake: number]> = async ({
    anchor,
    program,
  }, lake: number) => {
    const [lakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("lake"),
        (new anchor.BN(lake)).toArrayLike(Buffer, "le", 1),
      ],
      program.programId,
    );

    const lakeAccountData = await program.account.lakeAccountData.fetch(lakeAddress);

    const sequence = lakeAccountData.sequence;

    let power: number = 1;

    while (power * 2 <= sequence) {
      power *= 2;
    }

    return [(sequence - power) / power, (sequence - power) / power];
  };

  static getShortList: SolanaMethod<GameLevelShortDto[]> = async ({
    anchor,
    program,
    wallet,
  }) => {
    const levels: GameLevelShortDto[] = await Promise.all(
      this.ids.map<Promise<GameLevelShortDto>>(async (lake) => {
        const status = await this.getStatus({ anchor, program, wallet }, lake);

        let progress = 0;
        let userEarn: number | undefined;
        let initializeTimestamp = 0;
        if (status === GameLevelStatusEnum.Awaiting || status === GameLevelStatusEnum.Active) {
          const [progressFloat, userEarnFloat] = await this.progress({
            anchor,
            program,
            wallet,
          }, lake);
          progress = progressFloat * 100;
          userEarn = userEarnFloat;
        }
        else if (status === GameLevelStatusEnum.Unavailable) {
          const [lakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
            [
              Buffer.from("lake"),
              (new anchor.BN(lake)).toArrayLike(Buffer, "le", 1),
            ],
            program.programId,
          );
          const lakeAccountData = await program.account.lakeAccountData.fetch(lakeAddress);
          initializeTimestamp = lakeAccountData.activeSinceUnixTimestamp;
        }

        return {
          id: lake,
          level: lake + 1,
          price: this.LEVEL_PRICE_LIST[lake],
          status,
          partnerBonus: 0,
          profitLevel: 0,
          progress,
          userEarnings: typeof userEarn === "undefined" ? [] : [userEarn],
          initializeTimestamp,
        };
      }),
    );

    return levels;
  };

  static payTarget = (sequence: number) => {
    let power: number = 1;

    while (power * 2 <= sequence) {
      power *= 2;
    }

    return sequence - power;
  };

  static getOne: SolanaMethod<GameLevelGetInfoResDto, [lake: number]> = async ({
    anchor,
    program,
    wallet,
  }, lake) => {
    const status = await this.getStatus({ anchor, program, wallet }, lake);

    let progress = 0;
    let userEarn: number | undefined;
    let initializeTimestamp = 0;
    if (status === GameLevelStatusEnum.Awaiting || status === GameLevelStatusEnum.Active) {
      const [progressFloat, userEarnFloat] = await this.progress({
        anchor,
        program,
        wallet,
      }, lake);
      progress = progressFloat * 100;
      userEarn = userEarnFloat;
    }
    else if (status === GameLevelStatusEnum.Unavailable) {
      const [lakeAddress] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("lake"),
          (new anchor.BN(lake)).toArrayLike(Buffer, "le", 1),
        ],
        program.programId,
      );
      const lakeAccountData = await program.account.lakeAccountData.fetch(lakeAddress);
      initializeTimestamp = lakeAccountData.activeSinceUnixTimestamp;
    }

    return {
      level: lake + 1,
      activateAmount: 0,
    };
  };

  static join: SolanaMethod<void, [masterAddress: web3.PublicKey | null]> = async ({
    anchor,
    program,
    wallet,
  }, masterAddress) => {
    if (masterAddress == null) {
      [masterAddress] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from("vault")],
        program.programId,
      );
    }

    const [masterUserAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("user"),
        masterAddress.toBuffer(),
      ],
      program.programId,
    );

    await program.methods.join()
      .accounts({
        signer: wallet.publicKey,
        masterAccount: masterUserAddress,
      })
      // .signers([keyPair])
      .rpc();
  };

  static activate: SolanaMethod<number, [lake: number]> = async ({
    anchor,
    program,
    wallet,
  }, lake) => {
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
        (new anchor.BN(this.payTarget(sequence))).toArrayLike(Buffer, "le", 4),
      ],
      program.programId,
    );

    // console.log("PAYMENT", `${sequence} -> ${this.payTarget(sequence)}`);

    const masterFishAccountData = await program.account.fishAccountData.fetch(masterFishAddress);

    const [masterAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("user"),
        masterFishAccountData.owner.toBuffer(),
      ],
      program.programId,
    );

    const masterAccountData = await program.account.userAccountData.fetch(masterAddress);

    const [master1Address] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("user"),
        masterAccountData.master1.toBuffer(),
      ],
      program.programId,
    );

    const [master2Address] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("user"),
        masterAccountData.master2.toBuffer(),
      ],
      program.programId,
    );

    const [master3Address] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("user"),
        masterAccountData.master3.toBuffer(),
      ],
      program.programId,
    );

    await program.methods.activate(lake)
      .accounts({
        signer: wallet.publicKey,
        recipient: masterAccountData.owner,
        recipientMaster1: masterAccountData.master1,
        recipientMaster2: masterAccountData.master2,
        recipientMaster3: masterAccountData.master3,
        userFishAccount: userFishAddress,
        masterFishAccount: masterFishAddress,
        masterAccount: masterAddress,
        master1Account: master1Address,
        master2Account: master2Address,
        master3Account: master3Address,
      } as any)
      // .signers([keyPair])
      .rpc();

    return sequence;
  };

  static checkNetwork: SolanaMethod<boolean> = async ({ program }) => {
    await program.provider.connection.getVersion();
    return true;
  };
}
