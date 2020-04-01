### currentURL

<template>
    <b>Use</b>
</template>

```ts
import { currentURL } from 'util-snippets';

/**
 * Example：currentURL(); // 'https://medium.com/@fatosmorina'
 */

currentURL();
```

<template>
    <b>Code</b>
</template>

```ts
const currentURL = (): string => window.location.href;
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

