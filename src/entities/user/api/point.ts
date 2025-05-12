const prefix = import.meta.env.PROD ? "/" : "/";

export const $user = $fetch.create({
  baseURL: `${prefix}api/user`,
});
