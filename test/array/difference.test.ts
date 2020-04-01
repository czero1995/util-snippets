import difference from "../../src/snippets/array/difference";

test("difference", () => {
  expect(difference([1, 2, 3], [2, 3])).toStrictEqual([1]);
});
