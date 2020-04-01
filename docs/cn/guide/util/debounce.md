### 节流

`节流函数，经常用于监听滚动条事件`

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

