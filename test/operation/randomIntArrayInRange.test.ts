import randomIntArrayInRange from "../../src/snippets/operation/randomIntArrayInRange";
test("randomIntArrayInRange", () => {
  expect(randomIntArrayInRange(12, 15, 10).length).toBe(10);
  expect(randomIntArrayInRange(12, 15, 20).length).toBe(20);
});
