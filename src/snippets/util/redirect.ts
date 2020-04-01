/**
 * This snippet can be used to do a redirect to a specified URL.
 * redirect('https://github.com/czero1995/util-snippets');
 */
const redirect = (url: string, asLink: boolean = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

export default redirect;
