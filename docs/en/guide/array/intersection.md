### intersection

<template>
    <b>Use</b>
</template>

```ts
import { intersection } from 'util-snippets'

/**
 * Example：intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 */

intersection(array1,array2)
```

<template>
    <b>Code</b>
</template>

```ts
const intersection = (a: [], b: []) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

