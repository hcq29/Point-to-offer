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

### 解法一：replace() + 正则

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

### 解法三：逐个`+=`组合

使用遍历字符串的方法实现+=组合

```js
function replaceSpace(str)
{
    var result = '';
    for(let char of str){
    	if(char == ' ')
       		result += '%20';
    	else 
       		result += char;
	}
    return result;
}
```

### 解法四：encodeURIComponent()转码

`encodeURIComponent()`是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。具体请查看：[MDN之encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

```js
function replaceSpace(str)
{
   return encodeURIComponent(str);
}
```

