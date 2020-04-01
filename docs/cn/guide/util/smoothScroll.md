### 平滑滚动到节点

`页面平滑滚动到id或者class节点`

<template>
    <b>使用</b>
</template>

```ts
import { smoothScroll } from 'util-snippets';

/**
 * 示例：smoothScroll('#fooBar'); 
 * 示例：smoothScroll('.fooBar');
 */

smoothScroll(id);
smoothScroll(class);
```

<template>
    <b>代码</b>
</template>

```ts
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

