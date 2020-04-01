### castArray

<template>
    <b>Use</b>
</template>

```ts
import { castArray } from 'util-snippets'

/**
 * Example：castArray("a"); // [a]
 * Example：castArray(["a"]); // ["a"]
 */

castArray(val) // [a]
```

<template>
    <b>Code</b>
</template>

```ts
const castArray = val => (Array.isArray(val) ? val : [val]);
```

<style>
    b {
        color: #3eaf7c;
    }
</style>

