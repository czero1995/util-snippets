### deepClone

<template>
    <b>Use</b>
</template>

```ts
import { deepClone } from 'util-snippets'

/**
 * Example：let val = deepClone({a:{b:{}}}); 
 */

deepClone(object)
```

<template>
    <b>Code</b>
</template>

```ts
const deepClone = (obj: object) => {
  const target = {};
  for (const key in obj) {
    if (Reflect.has(obj, key)) {
      typeof obj[key] === "object"
        ? (target[key] = deepClone(obj[key]))
        : (target[key] = obj[key]);
    }
  }
  return target;
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

