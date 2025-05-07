export function formatUserStatRecord(n: number) {
  if (Number.isInteger(n))
    return n.toString();
  return n.toFixed(1).replace(".", ",");
}
