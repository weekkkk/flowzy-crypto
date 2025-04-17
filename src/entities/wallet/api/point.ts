const prefix = import.meta.env.PROD ? "/flowzy-crypto/" : "/";

export const $wallet = $fetch.create({
  baseURL: `${prefix}api/wallet`,
});
