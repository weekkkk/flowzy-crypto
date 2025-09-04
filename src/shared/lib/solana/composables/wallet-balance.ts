import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

export function useWalletBalance() {
  const { publicKey } = useExtendedWallet();
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const { data, ...rest } = useAsyncData("balance", () => connection.getBalance(
    new PublicKey(publicKey.value as PublicKey),
  ), {
    server: false,
    immediate: !!publicKey.value,
    getCachedData(key, nuxtApp) {
      const cached = nuxtApp.payload.data[key];
      return cached;
    },
  });

  const balance = computed(() => data.value && data.value / LAMPORTS_PER_SOL);

  return { ...rest, balance };
}
