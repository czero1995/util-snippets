import maxN from "../../src/snippets/array/maxN";
test("maxN", () => {
  expect(maxN([1, 2, 3, 4])).toStrictEqual([4]);
  expect(maxN([1, 2, 3, 4], 2)).toStrictEqual([4, 3]);
});
