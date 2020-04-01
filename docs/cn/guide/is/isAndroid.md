### 是否是Android系统

`判断当前终端是否是Android系统`

<template>
    <b>使用</b>
</template>

```ts
import { isAndroid } from 'util-snippets';

if(isAndroid()){
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isAndroid = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>