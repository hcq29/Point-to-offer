# 剑指offer第20题：包含min函数的栈

## 题目描述

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

**题样**

```javascript
function push(node)
{
    // write code here
}
function pop()
{
    // write code here
}
function top()
{
    // write code here
}
function min()
{
    // write code here
}
```



## 分析

### 什么是栈？

栈是一种只能从表的一端存取数据且遵循 "先进后出" 原则的线性存储结构。



### 栈通常采用的两种存储结构

- 链式存储结构（简称链栈）：带有头指针或头结点的单循环**链表**。

- 顺序存储结构（简称顺序栈）：以**数组**的形式

这里使用顺序存储结构进行对数组的操作。

```javascript
var stack = [];
```



### 怎样获得栈中的最小元素

如果使用 `Math.min.apply(this,stack);`倒是可以找到栈中的最小值，但是题目中要求时间复杂度应为O（1），所以就要在插入的时候记录最小值，后续直接返回就可以

但是我们可能会想，如果每传入的数比栈顶元素小的话就将最小值用变量存储起来，但是如果执行了pop操作的话，就需要去寻找上一个最小值，再执行的话，就要寻找上上个最小值，这样的话显然是不可取的。



## 解题

其实，min函数可以借助push、pop、top的操作。另外还要借助另一个栈去存储最小值的弹出循序。

```javascript
var minStack = [];
```

例如：

- stack中依次入栈：5,  4,  3,  8,  10,  11,  12, 1

- 则min依次入栈： 5,  4,  3, no, no,  no, no, 1  



### top()

对于top函数，就是将栈顶元素进行返回，也就是数组的最后一个元素，因为javascript中 Array.prototype上没有top方法，所以后面的取得栈顶元素不能直接使用top方法。而是使用当前数组的最后一个元素。

```javascript
function top(){
    return stack[stack.length - 1];
}
```



### push()

对于push函数，将一个元素进行入栈操作。

```javascript
function push(node)
{
    stack.push(node);
    if(minStack.length == 0) minStack.push(node);
    else if(node <= minStack[minStack.length - 1]){
        minStack.push(node);
    }
}
```



### pop()

对于pop函数，对栈顶元素进行出栈操作，并返回该元素

同时还要注意对 minStack 辅助栈的操作

```javascript
function pop()
{
    if(stack[stack.length - 1] == minStack[minStack.length - 1]) minStack.pop()
    return stack.pop();
}
```



### min()

这样一来，minStack 这个栈的栈顶元素就是 stack 中的最小值

```javascript
function min()
{
    return minStack[minStack.length - 1];
}
```





## 完整代码

```javascript
var stack=[];
var minStack = [];
function push(node)
{
    stack.push(node);
    if(minStack.length == 0) minStack.push(node);
    else if(node <= minStack[minStack.length - 1]){
        minStack.push(node);
    }
}
function pop()
{
    if(stack[stack.length - 1] == minStack[minStack.length - 1]) minStack.pop()
    return stack.pop();
}
function top()
{
    return stack[stack.length - 1];
}
function min()
{
    return minStack[minStack.length - 1];
}
```

上一篇：[19-顺时针打印矩阵](../19-顺时针打印矩阵/)

下一篇：[21-栈的压入、弹出序列](../21-栈的压入、弹出序列/)

