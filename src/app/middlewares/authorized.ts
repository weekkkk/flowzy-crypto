export default defineNuxtRouteMiddleware(async () => {
  const user = useState<AuthUserDto | undefined>("user");

  if (user.value)
    return;

  return abortNavigation({ statusCode: 404 });
});
