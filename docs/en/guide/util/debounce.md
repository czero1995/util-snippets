### debounce

<template>
    <b>Use</b>
</template>

```ts
import { debounce } from 'util-snippets'

debounce(fn(),time)
```

<template>
    <b>Code</b>
</template>

```ts
const debounce = (fn, interval = 600) => {
  let timeout: any = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply();
    }, interval);
  };
}
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

