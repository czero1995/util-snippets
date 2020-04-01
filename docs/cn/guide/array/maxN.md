### 获取数组中最大的N个值


<template>
    <b>使用</b>
</template>

```ts
import { maxN } from 'util-snippets'

/**
 * 示例：maxN([1, 2, 3]); // [3]
 * 示例：maxN([1, 2, 3], 2); // [3,2]
 */

maxN(array,number)
```

<template>
    <b>代码</b>
</template>

```ts
const maxN = (arr: number[], n = 1): number[] => [...arr].sort((a, b) => b - a).slice(0, n);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

