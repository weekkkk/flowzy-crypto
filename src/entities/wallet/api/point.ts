const prefix = import.meta.env.PROD ? "/" : "/";

export const $wallet = $fetch.create({
  baseURL: `${prefix}api/wallet`,
});
