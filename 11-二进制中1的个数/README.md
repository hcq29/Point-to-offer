# 剑指offer第十一题：二进制中1的个数

## 题目描述

输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

## 分析

观察以下二进制数，可以看到其中有7个1。

`11001011101`

补码：原码的反码加1。

## 解题

```javascript
function NumberOf1(n)
{
    var count = 0;
    if(n < 0)
        n = n & 0xffffffff
    while(n){
        n = n & (n - 1);
        count++;
    }
    return count;
}
```



在64位的系统中，INT是4字节整数，也就是32位整数

```javascript
function NumberOf1(n)
{
    var count = 0;
    for(var i = 0 ; i < 32; i++){
        if(n % 2 !== 0) count++;
        n = n >> 1;
    }
    return count;
}
```



**//**      **//把这个数逐次 右移 然后和1 与,**  

​      **//就得到最低位的情况,其他位都为0,**  

​      **//如果最低位是0和1与 之后依旧**        **是0，如果是1，与之后还是1。**  

​      **//对于32位的整数 这样移动32次 就记录了这个数二进制中1的个数了** 

```javascript
function NumberOf1(n)
{
    var count = 0;
    for(var i = 0 ; i < 32; i++){
        if(n >> i & 1) count++;
    }
    return count;
}
```

