const prefix = import.meta.env.PROD ? "/flowzy-crypto/" : "/";

export const $referral = $fetch.create({
  baseURL: `${prefix}api/referral`,
});
