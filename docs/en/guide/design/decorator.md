### Decorator

<template>
    <b>Use</b>
</template>

```ts
import { decoratorTimeTaken } from 'util-snippets';

@decoratorTimeTaken('Calculate the execution time of the function')
hello(params){
    console.log('i am hello',params)
}
```

<template>
    <b>Code</b>
</template>

```ts
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