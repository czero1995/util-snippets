/**
 * This snippet capitalizes the first letter of every word in a given string.
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 */
const capitalizeEveryWord = (str: string): string =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

export default capitalizeEveryWord;
