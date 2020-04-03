const throttle = (fn, interval = 300) => {
  let canRun = true;
  return () => {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn.apply();
      canRun = true;
    }, interval);
  };
};

export default throttle;
