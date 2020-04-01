/**
 * This snippet can be used to get an array with elements that are included in two other arrays.
 * intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 */
const intersection = (a: any[], b: any[]) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

export default intersection;

// /**
//  * This snippet can be used to return an array of elements that appear in two arrays.
//  * similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
//  */
// const similarity = (arr, values) => arr.filter(v => values.includes(v));

// export default similarity;
