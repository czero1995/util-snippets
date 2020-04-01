### 获取数组中获取某个元素重复出现次数

`获取数组中获取某个元素重复出现次数。`

<template>
    <b>使用</b>
</template>

```ts
import { countOccurrences } from 'util-snippets'

/**
 * 示例：countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */

countOccurrences(array,element)
```

<template>
    <b>代码</b>
</template>

```ts
const countOccurrences = (arr: [], val): number =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

