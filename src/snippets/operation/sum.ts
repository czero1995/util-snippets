/**
 * This snippet can be used to find the sum of two or more numbers or arrays.
 * sum(1, 2, 3, 4); // 10
 * sum(...[1, 2, 3, 4]); // 10
 */
const sum = (...arr: number[]): number => {
  return [...arr].reduce((acc, val) => acc + val, 0);
};

export default sum;
