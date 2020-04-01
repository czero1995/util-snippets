### capitalizeEveryWord

<template>
    <b>Use</b>
</template>

```ts
import { capitalizeEveryWord } from 'util-snippets';

/**
 * Example：capitalizeEveryWord('hello world!'); // 'Hello World!'
 */

capitalizeEveryWord(string);
```

<template>
    <b>Code</b>
</template>

```ts
const capitalizeEveryWord = (str: string): string => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```


<style>
    b {
        color: #3eaf7c;
    }
</style>

