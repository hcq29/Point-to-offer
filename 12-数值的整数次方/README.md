

# 剑指offer第十二题：数值的整数次方

## 题目描述

给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

保证base和exponent不同时为0



## 解题

### 解法一：Math.pow()

`Math.pow()` 函数返回基数（`base`）的指数（`exponent`）次幂，即 base<sup>exponent</sup>。

```javascript
function Power(base, exponent)
{
    return Math.pow(base, exponent);
}
```



### 解法二：幂运算符（**）

```javascript
function Power(base, exponent)
{
    return base ** exponent;
}
```



### 解法三&四：递归&迭代

其实JavaScript为我们提供的Math.pow和幂运算符方法原理是通过递归或者迭代计算出来的，具体实现原理如下。

递归实现

```javascript
function Power(base, exponent){
    if(exponent === 0) return 1;
    var n = exponent;
    if(exponent < 0) n = 0-exponent;
    var temp = Power(base, parseInt(n / 2));
    var result = 1;
    if (n % 2 !== 0) result = base * temp * temp;  //  或者 if(n & 1 === 1)
    else result = temp * temp;
    return exponent < 0 ? 1 / result : result;
}
```

其中的`temp`实现的是幂的二分运算

比如 5<sup>11</sup>，我们将之拆分成  5<sup>5</sup> * 5<sup>5</sup>  但是 依据 11 是奇数这时候会少了一个 5<sup>1</sup>  也就是`base`

- 当遇到 奇数 时，result  = base * (temp * temp) 
- 当遇到 偶数 时，result = temp * temp;



迭代实现

```javascript
function Power(base, exponent)
{
    var result = 1.0;
    if(exponent == 0) return 1;
    var n = exponent;
    if(exponent < 0) n = 0-exponent;
    for(var i = 0 ; i < n;i++){
        result *= base;
    }
    return exponent < 0 ? 1 / result : result;
}
```

