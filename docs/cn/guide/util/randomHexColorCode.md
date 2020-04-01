### 随机颜色值

`获取随机一个颜色的色值`



<template>
    <b>使用</b>
</template>

```ts
import { randomHexColorCode } from 'util-snippets'

/**
 * 示例：randomHexColorCode(); // "#e34155"
 */

randomHexColorCode
```

<template>
    <b>代码</b>
</template>

```ts
const randomHexColorCode = ():string => {
  const n:string = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

