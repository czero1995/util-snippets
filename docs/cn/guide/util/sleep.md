### 延迟执行

`JS异步配合async await，让程序等待xx毫秒之后执行`


<template>
    <b>使用</b>
</template>

```ts
import { sleep } from 'util-snippets'

/**
 * 示例：
 *   async function sleepyWork() {
 *      console.log("I'm going to sleep for 1 second.");
 *      await sleep(1000);
 *      console.log('I woke up after 1 second.');
 *    }
 */

sleep(second);
```

<template>
    <b>代码</b>
</template>

```ts
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

