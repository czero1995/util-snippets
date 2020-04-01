### 是否到达页面底部

`判断当前页面是否滚动到了底部`

<template>
    <b>使用</b>
</template>

```ts
import { isBottomVisible } from 'util-snippets';

if(isBottomVisible()){
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isBottomVisible = (): boolean =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);
 ```


<style>
    b {
        color: #3eaf7c;
    }
</style>