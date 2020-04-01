### isBrowserTabFocused

<template>
    <b>Use</b>
</template>

```ts
import { isBrowserTabFocused } from 'util-snippets';

if(isBrowserTabFocused()){
    // to do something
};
```

<template>
    <b>Code</b>
</template>

```ts
const isBrowserTabFocused = () => !document.hidden;
```


<style>
    b {
        color: #3eaf7c;
    }
</style>