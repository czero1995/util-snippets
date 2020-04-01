### 其它类型转数组


<template>
    <b>使用</b>
</template>

```ts
import { castArray } from 'util-snippets'

/**
 * 示例：castArray("a"); // [a]
 * 示例：castArray(["a"]); // ["a"]
 */

castArray(val) // [a]
```

<template>
    <b>代码</b>
</template>

```ts
const castArray = val => (Array.isArray(val) ? val : [val]);
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

