### 检查当前标签页是否活动

<template>
    <b>使用</b>
</template>

```ts
import { isBrowserTabFocused } from 'util-snippets';

if(isBrowserTabFocused()){
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isBrowserTabFocused = () => !document.hidden;

```


<style>
    b {
        color: #3eaf7c;
    }
</style>