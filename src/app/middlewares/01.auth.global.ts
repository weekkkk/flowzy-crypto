export default defineNuxtRouteMiddleware(async () => {
  const user = useState<AuthUserDto | undefined>("user");

  if (user.value)
    return;
  const authorized = useCookie("authorized");
  let isAuthorized = false;

  if (authorized.value)
    isAuthorized = JSON.parse(authorized.value);

  if (!isAuthorized) {
    user.value = undefined;
    return;
  }
  user.value = { id: 32553, wallet: {
    address: "0xA7f82EDe67F07dC63Aa2921E8B582C14A0D47e7B",
    balance: 2.5,
  } };
});
