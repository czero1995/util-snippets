### randomNumber

<template>
    <b>Use</b>
</template>

```ts
import { randomNumber } from 'util-snippets'

/**
 * Example：randomNumber([3, 7, 9, 11]) // [9
 */

randomNumber(array)
```

<template>
    <b>Code</b>
</template>

```ts
const randomNumber = arr => arr[Math.floor(Math.random() * arr.length)];
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

