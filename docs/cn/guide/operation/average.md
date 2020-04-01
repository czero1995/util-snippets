### 平均值


<template>
    <b>使用</b>
</template>

```ts
import { average } from 'util-snippets';

/**
 * 示例：average(...[1, 2, 3]); // 2
 * 示例：average(1, 2, 3); // 2
 */

average(num1,num2,num3,...otherNum);
```

<template>
    <b>代码</b>
</template>

```ts
const average = (...nums: number[]): number => {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

