import castArray from "../../src/snippets/array/castArray";
test("castArray", () => {
  expect(castArray("a")).toEqual(["a"]);
  expect(castArray(["a"])).toEqual(["a"]);
});
