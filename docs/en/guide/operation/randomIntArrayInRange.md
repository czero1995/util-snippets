### randomIntArrayInRange

<template>
    <b>Use</b>
</template>

```ts
import { randomIntArrayInRange } from 'util-snippets'

/**
 * Example：randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
 */

randomIntArrayInRange(min,max,number) 

```

<template>
    <b>Code</b>
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

