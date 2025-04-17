const prefix = import.meta.env.PROD ? "/flowzy-crypto/" : "/";

export const $hello = $fetch.create({
  baseURL: `${prefix}api/hello`,
});
