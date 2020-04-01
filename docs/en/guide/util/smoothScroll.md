### smoothScroll

<template>
    <b>Use</b>
</template>

```ts
import { smoothScroll } from 'util-snippets';

/**
 * Example：smoothScroll('#fooBar'); 
 * Example：smoothScroll('.fooBar');
 */

smoothScroll(id);
smoothScroll(class);
```

<template>
    <b>Code</b>
</template>

```ts
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

