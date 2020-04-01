import capitalizeEveryWord from "../../src/snippets/util/capitalizeEveryWord";
test("capitalizeEveryWord", () => {
  expect(capitalizeEveryWord("hello world!")).toBe("Hello World!");
});
