/**
 * This snippet can be used to check whether a string is a valid JSON.
 * isValidJSON('{"name":"Adam","age":20}'); // true
 * isValidJSON('{"name":"Adam",age:"20"}'); // false
 */
const isValidJSON = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export default isValidJSON;
