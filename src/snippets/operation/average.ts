/**
 * This snippet returns the average of two or more numerical values.
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 */

const average = (...nums: number[]): number => {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
};

export default average;
