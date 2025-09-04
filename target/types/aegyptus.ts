/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/aegyptus.json`.
 */
export interface Aegyptus {
  address: "8UqDNba5BLszSiCaym6JdZvobNpTd9jgu552E1zyTYSw";
  metadata: {
    name: "aegyptus";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "activate";
      discriminator: [
        194,
        203,
        35,
        100,
        151,
        55,
        170,
        82,
      ];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "universeAccount";
          writable: true;
          pda: {
            seeds: [];
          };
        },
        {
          name: "vaultAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "recipient";
          writable: true;
        },
        {
          name: "recipientMaster1";
          writable: true;
        },
        {
          name: "recipientMaster2";
          writable: true;
        },
        {
          name: "recipientMaster3";
          writable: true;
        },
        {
          name: "masterAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "master_fish_account.owner";
                account: "fishAccountData";
              },
            ];
          };
        },
        {
          name: "master1Account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "master_account.master_1";
                account: "userAccountData";
              },
            ];
          };
        },
        {
          name: "master2Account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "master_account.master_2";
                account: "userAccountData";
              },
            ];
          };
        },
        {
          name: "master3Account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "master_account.master_3";
                account: "userAccountData";
              },
            ];
          };
        },
        {
          name: "userAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "signer";
              },
            ];
          };
        },
        {
          name: "lakeAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  108,
                  97,
                  107,
                  101,
                ];
              },
              {
                kind: "arg";
                path: "lake";
              },
            ];
          };
        },
        {
          name: "userLakeAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "const";
                value: [
                  108,
                  97,
                  107,
                  101,
                ];
              },
              {
                kind: "arg";
                path: "lake";
              },
            ];
          };
        },
        {
          name: "masterFishAccount";
          writable: true;
        },
        {
          name: "userFishAccount";
          writable: true;
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "lake";
          type: "u8";
        },
      ];
    },
    {
      name: "initialize";
      discriminator: [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237,
      ];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "universeAccount";
          writable: true;
          pda: {
            seeds: [];
          };
        },
        {
          name: "vaultAccount";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "userAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "vaultAccount";
              },
            ];
          };
        },
        {
          name: "userLakeAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "vaultAccount";
              },
              {
                kind: "const";
                value: [
                  108,
                  97,
                  107,
                  101,
                ];
              },
              {
                kind: "arg";
                path: "lake";
              },
            ];
          };
        },
        {
          name: "lakeAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  108,
                  97,
                  107,
                  101,
                ];
              },
              {
                kind: "arg";
                path: "lake";
              },
            ];
          };
        },
        {
          name: "fishAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  108,
                  97,
                  107,
                  101,
                ];
              },
              {
                kind: "arg";
                path: "lake";
              },
              {
                kind: "const";
                value: [
                  102,
                  105,
                  115,
                  104,
                ];
              },
              {
                kind: "const";
                value: [
                  0,
                  0,
                  0,
                  0,
                ];
              },
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "lake";
          type: "u8";
        },
        {
          name: "activeSinceUnixTimestamp";
          type: "i64";
        },
      ];
    },
    {
      name: "join";
      discriminator: [
        206,
        55,
        2,
        106,
        113,
        220,
        17,
        163,
      ];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "universeAccount";
          writable: true;
          pda: {
            seeds: [];
          };
        },
        {
          name: "vaultAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
            ];
          };
        },
        {
          name: "userAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  117,
                  115,
                  101,
                  114,
                ];
              },
              {
                kind: "account";
                path: "signer";
              },
            ];
          };
        },
        {
          name: "masterAccount";
          writable: true;
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
  ];
  accounts: [
    {
      name: "fishAccountData";
      discriminator: [
        143,
        17,
        0,
        29,
        222,
        55,
        8,
        193,
      ];
    },
    {
      name: "lakeAccountData";
      discriminator: [
        42,
        88,
        205,
        209,
        254,
        191,
        48,
        42,
      ];
    },
    {
      name: "universeAccountData";
      discriminator: [
        114,
        16,
        186,
        105,
        41,
        175,
        118,
        221,
      ];
    },
    {
      name: "userAccountData";
      discriminator: [
        75,
        191,
        211,
        244,
        19,
        173,
        123,
        139,
      ];
    },
    {
      name: "userLakeAccountData";
      discriminator: [
        23,
        176,
        185,
        190,
        115,
        247,
        153,
        16,
      ];
    },
  ];
  errors: [
    {
      code: 6000;
      name: "accessDenied";
      msg: "Access denied via signer address";
    },
  ];
  types: [
    {
      name: "fishAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "prevSequence";
            type: "u32";
          },
          {
            name: "paymentCount";
            type: "u32";
          },
          {
            name: "owner";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "lakeAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "sequence";
            type: "u32";
          },
          {
            name: "activeSinceUnixTimestamp";
            type: "i64";
          },
        ];
      };
    },
    {
      name: "universeAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "lakeCount";
            type: "u32";
          },
          {
            name: "userCount";
            type: "u32";
          },
          {
            name: "transactionCount";
            type: "u32";
          },
          {
            name: "transactionSum";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "userAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "pubkey";
          },
          {
            name: "lastLake";
            type: "u8";
          },
          {
            name: "slaveCount";
            type: "u32";
          },
          {
            name: "lakeIncome";
            type: "u64";
          },
          {
            name: "slaveIncome";
            type: "u64";
          },
          {
            name: "master1";
            type: "pubkey";
          },
          {
            name: "master2";
            type: "pubkey";
          },
          {
            name: "master3";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "userLakeAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "firstSequence";
            type: "u32";
          },
        ];
      };
    },
  ];
}
