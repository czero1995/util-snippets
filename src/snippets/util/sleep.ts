/**
 * This snippet can be used to delay the execution of an asynchronous function by putting it into sleep.
 * async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default sleep;
