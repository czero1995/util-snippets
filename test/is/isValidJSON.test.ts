import isValidJSON from "../../src/snippets/is/isValidJSON";
test("isValidJSON", () => {
  expect(isValidJSON('{"name":"Adam","age":20}')).toBeTruthy();
  expect(isValidJSON('{"name":"Adam",age:20}')).toBeFalsy();
});
