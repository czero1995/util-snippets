### isIos

<template>
    <b>Use</b>
</template>

```ts
import { isIos } from 'util-snippets';

if(isIos()){
    // to do something
};
```

<template>
    <b>Code</b>
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