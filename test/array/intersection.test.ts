import intersection from "../../src/snippets/array/intersection";
test("intersection", () => {
  expect(intersection([1, 2, 3], [4, 3, 2])).toStrictEqual([2, 3]);
});
