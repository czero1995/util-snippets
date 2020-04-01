### 是否是iOS系统

`判断当前终端是否是iOS系统`

<template>
    <b>使用</b>
</template>

```ts
import { isIos } from 'util-snippets';

if(isIos()){
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isIos = (): boolean => {
  const ua = navigator.userAgent;
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>