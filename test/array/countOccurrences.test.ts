import countOccurrences from "../../src/snippets/array/countOccurrences";
test("countOccurrences", () => {
  expect(countOccurrences([1, 2, 3, 3, 3], 3)).toBe(3);
});
