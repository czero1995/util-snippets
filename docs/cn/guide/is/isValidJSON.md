### JSON是否有效

```判断传入的值是否为有效的JSON格式```

<template>
    <b>使用</b>
</template>

```ts
import { isValidJSON } from 'util-snippets';

/**
 * 示例：isValidJSON('{"name":"Adam","age":20}'); // true
 * 示例：isValidJSON('{"name":"Adam",age:"20"}'); // false
 */

if(isValidJSON(str))) {
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isValidJSON = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
```


<style>
    b {
        color: #3eaf7c;
    }
</style>