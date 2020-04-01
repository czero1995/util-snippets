### 字符串转换成驼峰

`将字符串转换成驼峰`

<template>
    <b>使用</b>
</template>

```ts
import { capitalizeEveryWord } from 'util-snippets';

/**
 * 示例：capitalizeEveryWord('hello world!'); // 'Hello World!'
 */

capitalizeEveryWord(string);
```

<template>
    <b>代码</b>
</template>

```ts
const capitalizeEveryWord = (str: string): string => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

