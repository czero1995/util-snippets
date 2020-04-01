### 深克隆

`对象深度克隆`

<template>
    <b>使用</b>
</template>

```ts
import { deepClone } from 'util-snippets'

/**
 * 示例：let val = deepClone({a:{b:{}}}); 
 */

deepClone(object)
```

<template>
    <b>代码</b>
</template>

```ts
const deepClone = (obj: object) => {
  const target = {};
  for (const key in obj) {
    if (Reflect.has(obj, key)) {
      typeof obj[key] === "object"
        ? (target[key] = deepClone(obj[key]))
        : (target[key] = obj[key]);
    }
  }
  return target;
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

