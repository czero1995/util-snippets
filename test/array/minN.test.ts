import minN from "../../src/snippets/array/minN";
test("minN", () => {
  expect(minN([1, 2, 3, 4])).toStrictEqual([1]);
  expect(minN([1, 2, 3, 4], 2)).toStrictEqual([1, 2]);
});
