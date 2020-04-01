### isBottomVisible

<template>
    <b>Use</b>
</template>

```ts
import { isBottomVisible } from 'util-snippets';

if(isBottomVisible()){
    // to do something
};
```

<template>
    <b>Code</b>
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