### isBrowser

<template>
    <b>Use</b>
</template>

```ts
import { isBrowser } from 'util-snippets';

/**
 * Example：isBrowser(); // true (browser)
 * Example：isBrowser(); // false (Node)
 */

if(isBrowser()) {
    // to do something
};
```

<template>
    <b>Code</b>
</template>

```ts
const isBrowser = (): boolean => ![typeof window, typeof document].includes('undefined');
```


<style>
    b {
        color: #3eaf7c;
    }
</style>