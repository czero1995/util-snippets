import randomHexColorCode from "../../src/snippets/util/randomHexColorCode";
test("randomHexColorCode", () => {
  expect(randomHexColorCode().length).toBe(7);
});
