
export function isValidIndex(arr: unknown[], index: number): boolean {
  return index >= 0 && index <= arr.length - 1;
}