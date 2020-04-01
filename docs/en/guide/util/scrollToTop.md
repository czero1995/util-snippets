### scrollToTop

<template>
    <b>Use</b>
</template>

```ts
import { scrollToTop } from 'util-snippets'

scrollToTop()
```

<template>
    <b>Code</b>
</template>

```ts
const scrollToTop = () => {
  const c: number = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

