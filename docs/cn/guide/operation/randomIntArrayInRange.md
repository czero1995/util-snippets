### 区间内随机生成多个值

`某个区间内随机生成的N个值`

<template>
    <b>使用</b>
</template>

```ts
import { sum } from 'util-snippets'

/**
 * 示例：randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
 */

randomIntArrayInRange(min,max,number) 

```

<template>
    <b>代码</b>
</template>

```ts
const randomIntArrayInRange = (min: number, max: number, n = 1): number[] =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

```


<style>
    b {
        color: #3eaf7c;
    }
</style>

