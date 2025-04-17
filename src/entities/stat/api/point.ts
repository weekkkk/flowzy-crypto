const prefix = import.meta.env.PROD ? "/flowzy-crypto/" : "/";

export const $stat = $fetch.create({
  baseURL: `${prefix}api/stat`,
});
