### 获取当前网址

`获取当前页路由的地址`

<template>
    <b>使用</b>
</template>

```ts
import { currentURL } from 'util-snippets';

/**
 * 示例：currentURL(); // 'https://medium.com/@fatosmorina'
 */

currentURL();
```

<template>
    <b>代码</b>
</template>

```ts
const currentURL = (): string => window.location.href;
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

