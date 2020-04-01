### 策略模式

`策略模式的典型应用是表单校验中，对于校验规则的封装。`

<template>
    <b>使用</b>
</template>

```ts
import { strategies } from 'util-snippets';

const name = strategies.isNonEmpty(inputName, '名称不可为空')
const length = strategies.isNonEmpty(inputLength, 10, '输入的值长度必须大10')
const typeArray = strategies.arrayThanZero(inputArray, '类型数组长度必须大于0')
let result = name || length || typeArray 
if(result){
    return result
};
```

<template>
    <b>代码</b>
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