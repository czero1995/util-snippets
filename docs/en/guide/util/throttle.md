### throttle

<template>
    <b>Use</b>
</template>

```ts
import { throttle } from 'util-snippets'

throttle(fn(),time)
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

