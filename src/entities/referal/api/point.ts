const prefix = import.meta.env.PROD ? "/" : "/";

export const $referral = $fetch.create({
  baseURL: `${prefix}api/referral`,
});
