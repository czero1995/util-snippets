### 手机号是否有效

`判断手机号是否有效，是否符合要求`

<template>
    <b>使用</b>
</template>

```ts
import { isMobilePhone } from 'util-snippets';

/**
 * 示例：isMobilePhone(13641414141)// true
 * 示例：isMobilePhone(12345678901); // false
 */

if(isMobilePhone()) {
    // to do something
};
```

<template>
    <b>代码</b>
</template>

```ts
const isMobilePhone = (num: number): boolean => /(^1[3|4|5|7|8][0-9]{9}$)/.test(num + '');
```


<style>
    b {
        color: #3eaf7c;
    }
</style>