/**
 * This snippet counts the occurrences of a value in an array.
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
const countOccurrences = (arr: any[], val): number =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export default countOccurrences;
