### maxN

<template>
    <b>Use</b>
</template>

```ts
import { maxN } from 'util-snippets'

/**
 * Example：maxN([1, 2, 3]); // [3]
 * Example：maxN([1, 2, 3], 2); // [3,2]
 */

maxN(array,number)
```

<template>
    <b>Code</b>
</template>

```ts
const maxN = (arr: number[], n = 1): number[] => [...arr].sort((a, b) => b - a).slice(0, n);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

