### redirect

<template>
    <b>Use</b>
</template>

```ts
import { redirect } from 'util-snippets'

/**
 * Example：redirect('https://github.com/czero1995/util-snippets');
 */

redirect(url)
```

<template>
    <b>Code</b>
</template>

```ts
const redirect = (url: string, asLink: boolean = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

