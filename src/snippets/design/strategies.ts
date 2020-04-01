const strategies = {
  isNonEmpty(value: string, errorMsg: string) {
    if (value == "" || value == null) {
      return errorMsg;
    }
  },
  minLength(value: string, length: number, errorMsg: string) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  arrayThanZero(value: [], errorMsg) {
    if (value.length == 0) {
      return errorMsg;
    }
  }
};

export default strategies;
