/**
 * This snippet finds the difference between two arrays.
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 */
const difference = (a: any[], b: any[]) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

export default difference;
