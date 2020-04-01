### strategies

<template>
    <b>Use</b>
</template>

```ts
import { strategies } from 'util-snippets';

const name = strategies.isNonEmpty(inputName, 'name is no empty')
const length = strategies.isNonEmpty(inputLength, 10, 'value muse bigger 10')
const typeArray = strategies.arrayThanZero(inputArray, 'type of array length bigger 0')
let result = name || length || typeArray 
if(result){
    return result
};
```

<template>
    <b>Code</b>
</template>

```ts
const strategies = {
    isNonEmpty(value: string, errorMsg: string) {
        if (value == '' || value == null) {
            return errorMsg
        }
    },
    minLength(value: string, length: number, errorMsg: string) {
        if (value.length < length) {
            return errorMsg
        }
    },
    arrayThanZero(value: [], errorMsg) {
        if (value.length == 0) {
            return errorMsg
        }
    }
}

```


<style>
    b {
        color: #3eaf7c;
    }
</style>