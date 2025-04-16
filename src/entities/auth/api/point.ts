const prefix = import.meta.env.PROD ? "/flowzy-crypto" : "/";

export const $auth = $fetch.create({
  baseURL: `${prefix}api/auth`,
});
