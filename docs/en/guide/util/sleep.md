### sleep

<template>
    <b>Use</b>
</template>

```ts
import { sleep } from 'util-snippets'

/**
 * Example：
 *   async function sleepyWork() {
 *      console.log("I'm going to sleep for 1 second.");
 *      await sleep(1000);
 *      console.log('I woke up after 1 second.');
 *    }
 */

sleep(second);
```

<template>
    <b>Code</b>
</template>

```ts
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

