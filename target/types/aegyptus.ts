/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/aegyptus.json`.
 */
export interface Aegyptus {
  address: "D4zv6uyBk6tN2oqgSuDdrktAMkeqrNtJpAYLQzRLVawV";
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
          name: "recipient";
          writable: true;
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
          name: "masterFishAccount";
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
          name: "operator";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  111,
                  112,
                  101,
                  114,
                  97,
                  116,
                  111,
                  114,
                ];
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
          optional: true;
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
  ];
  types: [
    {
      name: "fishAccountData";
      type: {
        kind: "struct";
        fields: [
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
            name: "master1";
            type: {
              option: "pubkey";
            };
          },
          {
            name: "master2";
            type: {
              option: "pubkey";
            };
          },
          {
            name: "master3";
            type: {
              option: "pubkey";
            };
          },
        ];
      };
    },
  ];
}
