### isAndroid

<template>
    <b>Use</b>
</template>

```ts
import { isAndroid } from 'util-snippets';

if(isAndroid()){
    // to do something
};
```

<template>
    <b>Code</b>
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