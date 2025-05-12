const prefix = import.meta.env.PROD ? "/" : "/";

export const $hello = $fetch.create({
  baseURL: `${prefix}api/hello`,
});
