### minN

<template>
    <b>Use</b>
</template>

```ts
import { minN } from 'util-snippets'

/**
 * Example：minN([1, 2, 3]); // [1]
 * Example：minN([1, 2, 3], 2); // [1,2]
 */

minN(array,number)
```

<template>
    <b>Code</b>
</template>

```ts
const minN = (arr: number[], n = 1): number[] => [...arr].sort((a, b) => a - b).slice(0, n);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

