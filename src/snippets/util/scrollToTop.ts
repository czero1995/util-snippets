/**
 * This snippet can be used to do a smooth scroll to the top of the current page.
 * scrollToTop();
 */
const scrollToTop = () => {
  const c: number =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

export default scrollToTop;
