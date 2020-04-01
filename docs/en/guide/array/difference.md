### difference

<template>
    <b>Use</b>
</template>

```ts
import { difference } from 'util-snippets'

/**
 * Example：difference([1, 2, 3], [1, 2, 4]); // [3]
 */

difference(array1,array2); 
```

<template>
    <b>Code</b>
</template>

```ts
const difference = (a: [], b: []) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

