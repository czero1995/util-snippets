### debounce

<template>
    <b>Use</b>
</template>

```ts
import { debounce } from 'util-snippets'

deepClone(fn(),time)
```

<template>
    <b>Code</b>
</template>

```ts
const throttle = (fn, interval = 300) => {
  let canRun = true;
  return () => {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn.apply();
      canRun = true;
    }, interval);
  };
};

```


<style>
    b {
        color: #3eaf7c;
    }
</style>

