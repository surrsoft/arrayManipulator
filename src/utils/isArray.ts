import loIsArray from 'lodash/isArray';

export function isArrayAm(arr: unknown[]): boolean {
  return loIsArray(arr);
}