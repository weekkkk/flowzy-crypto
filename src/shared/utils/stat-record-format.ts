export function format(str: string) {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
