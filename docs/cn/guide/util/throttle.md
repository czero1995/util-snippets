### 防抖

`防抖函数，经典的用于搜索框实时搜索，提高性能。`

<template>
    <b>使用</b>
</template>

```ts
import { debounce } from 'util-snippets'

deepClone(fn(),time)
```

<template>
    <b>代码</b>
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

