const prefix = import.meta.env.PROD ? "/flowzy-crypto/" : "/";

export const $gameLevel = $fetch.create({ baseURL: `${prefix}api/game-levels` });
