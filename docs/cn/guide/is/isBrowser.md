### 是否浏览器环境

  `判断当前运行时环境是否为浏览器,避免在服务器(Node)上运行前端模块时出现错误.`

<template>
    <b>使用</b>
</template>

```ts
import { isBrowser } from 'util-snippets';

/**
 * 示例：isBrowser(); // true (browser)
 * 示例：isBrowser(); // false (Node)
 */

if(isBrowser()) {
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isBrowser = (): boolean => ![typeof window, typeof document].includes('undefined');
```


<style>
    b {
        color: #3eaf7c;
    }
</style>