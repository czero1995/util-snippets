### 获取两个数组中不同的值


<template>
    <b>使用</b>
</template>

```ts
import { difference } from 'util-snippets'

/**
 * 示例：difference([1, 2, 3], [1, 2, 4]); // [3]
 */

difference(array1,array2); 
```

<template>
    <b>代码</b>
</template>

```ts
const difference = (a: [], b: []) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

