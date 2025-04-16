const prefix = import.meta.env.PROD ? "/flowzy-crypto" : "/";

export const $notification = $fetch.create({
  baseURL: `${prefix}api/notification`,
});
