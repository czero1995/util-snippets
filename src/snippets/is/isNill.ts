/**
 * This snippet can be used to check whether a value is null or undefined.
 * isNil(null); // true
 * isNil(undefined); // true
 */
const isNil = (val): boolean => val === undefined || val === null;

export default isNil;
