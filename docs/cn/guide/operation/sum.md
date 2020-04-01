### 多值求和


<template>
    <b>使用</b>
</template>

```ts
import { sum } from 'util-snippets'

/**
 * 示例：sum(1,2,3,4) // 10
 * 示例：sum(...[1, 2, 3, 4]); // 10
 */

sum(num1,num2,...more)
```

<template>
    <b>代码</b>
</template>

```ts
const sum = (...arr: number[]): number => {
  return [...arr].reduce((acc, val) => acc + val, 0);
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

