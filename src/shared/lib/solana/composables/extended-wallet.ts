import { useWallet } from "solana-wallets-vue";

export function useExtendedWallet() {
  const { wallet, connecting, connected, publicKey, ...rest } = useWallet();

  const content = computed(() => {
    if (connecting.value)
      return "Connecting ...";
    if (connected.value)
      return "Connected";
    if (wallet.value)
      return "Connect";
    return "Connect Wallet";
  });

  const publicKeyBase58 = computed(() => publicKey.value?.toBase58());
  const publicKeyTrimmed = computed(() => {
    if (!wallet.value || !publicKeyBase58.value)
      return null;
    return (
      `${publicKeyBase58.value.slice(0, 4)
      }..${
        publicKeyBase58.value.slice(-4)}`
    );
  });

  return {
    ...rest,
    content,
    wallet,
    connecting,
    connected,
    publicKey,
    publicKeyBase58,
    publicKeyTrimmed,
  };
}
