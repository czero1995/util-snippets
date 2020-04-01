### 是否是undefined或null

```判断值是undefined或null```

<template>
    <b>使用</b>
</template>

```ts
import { isNill } from 'util-snippets';

/**
 * 示例：isNill(null); // true
 * 示例：isNill(undefined); // true
 * 示例：isNilll('123') //false
 */

if(isNill()) {
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isNil = (val): boolean => val === undefined || val === null;
```


<style>
    b {
        color: #3eaf7c;
    }
</style>