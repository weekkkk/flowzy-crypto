const prefix = import.meta.env.PROD ? "/" : "/";

export const $auth = $fetch.create({
  baseURL: `${prefix}api/auth`,
});
