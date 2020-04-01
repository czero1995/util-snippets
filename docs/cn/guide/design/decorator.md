### 装饰器模式

`装饰器模式主要用来装饰类和高阶函数`

<template>
    <b>使用</b>
</template>

```ts
import { decoratorTimeTaken } from 'util-snippets';

@decoratorTimeTaken('计算函数的执行时间')
hello(params){
    console.log('我是hello',params)
}
```

<template>
    <b>代码</b>
</template>

```ts
// 计算函数的执行时间
 function decoratorTimeTaken(message) {
    return (target, name, descriptor) => {
        let oldValue = descriptor.value
        descriptor.value = () => {
            console.time(message)
            oldValue.call(this)
            console.timeEnd(message)
        }
    }
}
```


<style>
    b {
        color: #3eaf7c;
    }
</style>