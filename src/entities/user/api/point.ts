const prefix = import.meta.env.PROD ? "/flowzy-crypto/" : "/";

export const $user = $fetch.create({
  baseURL: `${prefix}api/user`,
});
