/**
 * This snippet checks whether the bottom of a page is visible.
 * bottomVisible(); // true
 */
const isBottomVisible = (): boolean =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

export default isBottomVisible;
