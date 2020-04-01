/**
 * This snippet checks number is phone number
 * isMobilePhone(13641414141)// true
 * isMobilePhone(12345678901); // false
 */

const isMobilePhone = (num: number): boolean =>
  /(^1[3|4|5|7|8][0-9]{9}$)/.test(num + "");

export default isMobilePhone;
