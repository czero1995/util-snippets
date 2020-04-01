const debounce = (fn, interval = 600) => {
  let timeout: any = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply();
    }, interval);
  };
};

export default debounce;
