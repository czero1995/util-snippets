### 节流

`节流函数，用户滚动条监听做的性能优化`

<template>
    <b>使用</b>
</template>

```ts
import { throttle } from 'util-snippets'

throttle(fn(),time)
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

