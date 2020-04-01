### sum

<template>
    <b>Use</b>
</template>

```ts
import { sum } from 'util-snippets'

/**
 * Example：sum(1,2,3,4) // 10
 * Example：sum(...[1, 2, 3, 4]); // 10
 */

sum(num1,num2,...more)
```

<template>
    <b>Code</b>
</template>

```ts
const sum = (...arr: number[]): number => {
  return [...arr].reduce((acc, val) => acc + val, 0);
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

