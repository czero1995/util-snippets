// 设置固定盖度
// overflow:auto;

// this.$refs.box.addEventListener(
//   "scroll",
//   throttle(this.scrollToTop, 500),
//   true
// );

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
