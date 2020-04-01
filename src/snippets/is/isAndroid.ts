const isAndroid = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
};

export default isAndroid;
