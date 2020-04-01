### isNill

<template>
    <b>Use</b>
</template>

```ts
import { isNill } from 'util-snippets';

/**
 * Example：isNill(null); // true
 * Example：isNill(undefined); // true
 * Example：isNilll('123') //false
 */

if(isNill()) {
    // to do something
};
```

<template>
    <b>Code</b>
</template>

```ts
const isNil = (val): boolean => val === undefined || val === null;
```


<style>
    b {
        color: #3eaf7c;
    }
</style>