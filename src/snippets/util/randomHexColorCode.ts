/**
 * This snippet can be used to generate a random hexadecimal color code.
 * randomHexColorCode(); // "#e34155"
 */
const randomHexColorCode = (): string => {
  const n: string = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

export default randomHexColorCode;
