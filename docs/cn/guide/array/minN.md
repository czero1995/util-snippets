### 获取数组中最小的N个值


<template>
    <b>使用</b>
</template>

```ts
import { minN } from 'util-snippets'

/**
 * 示例：minN([1, 2, 3]); // [1]
 * 示例：minN([1, 2, 3], 2); // [1,2]
 */

minN(array,number)
```

<template>
    <b>代码</b>
</template>

```ts
const minN = (arr: number[], n = 1): number[] => [...arr].sort((a, b) => a - b).slice(0, n);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

