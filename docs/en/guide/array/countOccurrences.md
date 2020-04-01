### countOccurrences

<template>
    <b>Use</b>
</template>

```ts
import { countOccurrences } from 'util-snippets'

/**
 * Example：countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */

countOccurrences(array,element)
```

<template>
    <b>Code</b>
</template>

```ts
const countOccurrences = (arr: [], val): number =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

