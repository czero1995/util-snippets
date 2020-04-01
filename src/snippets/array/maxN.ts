/**
 * This snippet returns the n largest elements from a list. If n is greater than or equal to the list’s length, then it will return the original list (sorted in descending order).
 * maxN([1, 2, 3]); // [3]
 * maxN([1, 2, 3], 2); // [3,2]
 */
const maxN = (arr: number[], n = 1): number[] =>
  [...arr].sort((a, b) => b - a).slice(0, n);

export default maxN;
