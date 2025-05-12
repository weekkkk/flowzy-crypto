const prefix = import.meta.env.PROD ? "/" : "/";

export const $stat = $fetch.create({
  baseURL: `${prefix}api/stat`,
});
