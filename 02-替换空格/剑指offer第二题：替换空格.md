# 剑指offer第二题：替换空格

## 题目描述

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

**示例：**

```js
"We Are Happy"
```

**期望输出结果**

```js
"We%20Are%20Happy"
```

### 解法一：replace()方法

```js
function replaceSpace(str)
{
   return str.replace(/\s/g, '%20');
}
```

### 解法二：拆+组合

首先是拆

按照什么来拆呢？将要被替换的空格`" "`作为分隔点，将字符串拆成多分组合的数组

```js
str.split(" ");
```

所得到的结果就是

```js
["we", "Are", "Happy"];
```

在对上述进行组合，使用`join()`方法可以将数组按照一定的规则进行拼接

```js
["we", "Are", "Happy"].join("%20");
```

最终结果

````js
"We%20Are%20Happy"
````

程序代码

```js
function replaceSpace(str)
{
    return str.split(" ").join("%20");
}
```

### 解法三：拆+逐个`+=`组合

按照上述拆分的数组，将`join()`方法换成我们自己实现的数组+=组合

```js
function replaceSpace(str)
{
    strArr = str.split('');
    var result = '';
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] == ' ')
            result += '%20';
        else 
            result += strArr[i];
    }
    return result;
}
```

### 解法四：encodeURIComponent()转码

```js
function replaceSpace(str)
{
   return encodeURIComponent(str);
}
```

