// Calculate the execution time of a function

export function decoratorTimeTaken(message) {
  return (target, name, descriptor) => {
    let oldValue = descriptor.value;
    descriptor.value = () => {
      console.time(message);
      oldValue.call(this);
      console.timeEnd(message);
    };
  };
}
