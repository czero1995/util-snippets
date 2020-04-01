### 随机数组中的一个元素


<template>
    <b>使用</b>
</template>

```ts
import { randomNumber } from 'util-snippets'

/**
 * 示例：randomNumber([3, 7, 9, 11]) // [9
 */

randomNumber(array)
```

<template>
    <b>代码</b>
</template>

```ts
const randomNumber = arr => arr[Math.floor(Math.random() * arr.length)];
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

