### randomHexColorCode

<template>
    <b>Use</b>
</template>

```ts
import { randomHexColorCode } from 'util-snippets'

/**
 * Example：randomHexColorCode(); // "#e34155"
 */

randomHexColorCode
```

<template>
    <b>Code</b>
</template>

```ts
const randomHexColorCode = ():string => {
  const n:string = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

