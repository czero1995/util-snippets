### 浮点数精确计算

`解决0.1 + 0.2 = 0.0.30000000000000004的方法`

<template>
    <b>使用</b>
</template>

```ts
import { plus, subtract, multiply, divide} from 'util-snippets'

/**
 * 示例：plus(0.1,0.2) = 0.3 、plus(0.1,0.2, ...more)
 * 示例：subtract(0.3,0.2) = 0.1 、subtract(0.3,0.2, ...more)
 * 示例：multiply(0.1,0.2) = 0.02 、multiply(0.1,0.2, ...more)
 * 示例：divide(0.3,0.1) = 3 、 divide(0.1,0.2, ...more)
 */

plus(num1,num2) // 加
subtract(num1,num2) // 减
multiply(num1,num2) // 乘
divide(num1,num2) // 除
```

<template>
    <b>代码</b>
</template>

```ts
/**
 * right: plus(0.1 ,0.2) = 0.3
 * wrong: 0.1 + 0.2 = 0.30000000000000004
 */
function plus(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return plus(plus(num1, num2), others[0], ...others.slice(1));
  }
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (multiply(num1, baseNum) + multiply(num2, baseNum)) / baseNum;
}

/**
 * right: subtract(0.3 ,0.1) = 0.2
 * wrong: 0.3 - 0.1 = 0.19999999999999998
 */
function subtract(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return subtract(subtract(num1, num2), others[0], ...others.slice(1));
  }
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (multiply(num1, baseNum) - multiply(num2, baseNum)) / baseNum;
}

/**
 * right: multiplied(0.1 ,0.2) = 0.02
 * wrong: 0.1 * 0.2 = 0.020000000000000004
 */
function multiply(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return multiply(multiply(num1, num2), others[0], ...others.slice(1));
  }
  const num1Changed = decimalCovertInteger(num1);
  const num2Changed = decimalCovertInteger(num2);
  const baseNum = digitLength(num1) + digitLength(num2);
  const leftValue = num1Changed * num2Changed;
  return leftValue / Math.pow(10, baseNum);
}

/**
 * right: subtract(0.3 ,0.1) = 3
 * wrong: 0.3 / 0.1 = 2.9999999999999996
 */
function divide(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return divide(divide(num1, num2), others[0], ...others.slice(1));
  }
  const num1Changed = decimalCovertInteger(num1);
  const num2Changed = decimalCovertInteger(num2);
  return multiply(
    num1Changed / num2Changed,
    amendNumber(Math.pow(10, digitLength(num2) - digitLength(num1)))
  );
}

/**
 * Turn Number Be Right
 * amend(0.09999999999999998) = 0.1
 */
function amendNumber(num: number, precision = 12): number {
  return +parseFloat(num.toPrecision(precision));
}

/**
 * Return digits length of a number
 * digitLength(0.12) = 2
 */
function digitLength(num: number): number {
  const eSplit = num.toString().split(/[eE]/);
  const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
 * Convert Decimal To Integer
 * decimalCovertInteger(0.1) = 1
 */
function decimalCovertInteger(num: number): number {
  if (num.toString().indexOf("e") === -1) {
    return Number(num.toString().replace(".", ""));
  }
  const dLen = digitLength(num);
  return dLen > 0 ? amendNumber(num * Math.pow(10, dLen)) : num;
}

export {
  plus,
  subtract,
  multiply,
  divide,
  amendNumber,
  digitLength,
  decimalCovertInteger
};

```


<style>
    b {
        color: #3eaf7c;
    }
</style>

