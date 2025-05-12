const prefix = import.meta.env.PROD ? "/" : "/";

export const $notification = $fetch.create({
  baseURL: `${prefix}api/notification`,
});
