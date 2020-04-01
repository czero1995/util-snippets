const isIos = (): boolean => {
  const ua = navigator.userAgent;
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

export default isIos;
