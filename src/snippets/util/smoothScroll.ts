/**
 * This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
 * smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
 * smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
 */
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({ behavior: "smooth" });

export default smoothScroll;
