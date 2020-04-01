### isMobilePhone

<template>
    <b>Use</b>
</template>

```ts
import { isMobilePhone } from 'util-snippets';

/**
 * Example：isMobilePhone(13641414141)// true
 * Example：isMobilePhone(12345678901); // false
 */

if(isMobilePhone()) {
    // to do something
};
```

<template>
    <b>Code</b>
</template>

```ts
const isMobilePhone = (num: number): boolean => /(^1[3|4|5|7|8][0-9]{9}$)/.test(num + '');
```


<style>
    b {
        color: #3eaf7c;
    }
</style>