### 跳转页面

`页面跳转到其他页面`

<template>
    <b>使用</b>
</template>

```ts
import { redirect } from 'util-snippets'

/**
 * 示例：redirect('https://github.com/czero1995/util-snippets');
 */

redirect(url)
```

<template>
    <b>代码</b>
</template>

```ts
const redirect = (url: string, asLink: boolean = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

