# 剑指offer第八题：跳台阶



## 题目描述

一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

解：

| 台阶数 | **0** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** |
| ------ | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 跳法   | 0     | 1     | 2     | 3     | 5     | 8     | 13    | 21    | 34    | 55    |

看到这组数的序列，我们可以看出它其实就是一个斐波那契数列的变形，台阶数为3起，就是前两项之和



## 解题

### 解法一：递归法

```javascript
function jumpFloor(number)
{
    // write code here
    return number < 3 ? number : jumpFloor(number - 1) + jumpFloor(number -2);
}
```

> 时间复杂度：O（N^2）
>
> 空间复杂度：O（N）



### 解法二：数组法

由于递归的方法时间复杂度太高了，我们不妨试试数组的方法。

```javascript
function jumpFloor(number)
{
    var array = [];
    array[0] = 0;
    array[1] = 1;
    array[2] = 2;
    
    for(var i = 3; i <= number; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[number];
}
```

> 时间复杂度：O(N)
>
> 空间复杂度：O(N)



### 解法二：变量法

我们定义的数组，造成了空间较大，采用变量存储的方法优化代码。

```javascript
function jumpFloor(number)
{
    if(number < 3) return number;
    
    var one = 1,
        two = 2,
        sum = 0;
    for(var i = 2;i < number; i++){
        sum = two + one;
        one = two;
        two = sum;
    }
    return sum;
}
```

> 时间复杂度：O(N)
>
> 空间复杂度：O(1)（创建了四个对象，是常数）

