### isValidJSON

<template>
    <b>Use</b>
</template>

```ts
import { isValidJSON } from 'util-snippets';

/**
 * Example：isValidJSON('{"name":"Adam","age":20}'); // true
 * Example：isValidJSON('{"name":"Adam",age:"20"}'); // false
 */

if(isValidJSON(str))) {
    // to do something
};
```

<template>
    <b>Code</b>
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