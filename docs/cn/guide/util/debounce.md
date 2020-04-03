### 防抖

`防抖函数，经常用于搜索框实时搜索`

<template>
    <b>使用</b>
</template>

```ts
import { debounce } from 'util-snippets'

debounce(fn(),time)
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

