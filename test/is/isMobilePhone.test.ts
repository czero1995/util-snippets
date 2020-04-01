import isMobilePhone from "../../src/snippets/is/isMobilePhone";
test("isMobilePhone", () => {
  expect(isMobilePhone(13641414141)).toBeTruthy();
  expect(isMobilePhone(12345678901)).toBeFalsy();
});
