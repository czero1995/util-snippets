import sum from "../../src/snippets/operation/sum";
test("sum", () => {
  expect(sum(...[1, 2, 3, 4])).toBe(10);
  expect(sum(...[1.1, 2, 3, 4])).toBe(10.1);
});
