const prefix = import.meta.env.PROD ? "/" : "/";

export const $gameLevel = $fetch.create({ baseURL: `${prefix}api/game-levels` });
