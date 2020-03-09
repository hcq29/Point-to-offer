# 剑指offer第22题：从上往下打印二叉树

## 题目描述

从上往下打印出二叉树的每个节点，同层节点从左至右打印。



## 解析

题目的要求是：从上往下打印出二叉树的每个节点，同层节点从左至右打印。也就是**二叉树的层次遍历**

实际就是**广度优先搜索 BFS**，借助一个队列存放着输出的顺序。



## 解题

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    var queue = [];
    var result = [];
    if(root != null){
        queue.push(root);
    }
    
    while(queue.length){
        var cur = queue.shift();
        result.push(cur.val);
        if(cur.left) queue.push(cur.left);
        if(cur.right) queue.push(cur.right);
    }
    return result;
}
```

关键在于这里

```javascript
while(queue.length){
    var cur = queue.shift();
    result.push(cur.val);
    if(cur.left) queue.push(cur.left);
    if(cur.right) queue.push(cur.right);
}
```

可以看到，经过二叉树当前一层的执行，我们就已经将二叉树的的下一层插入到了队列的后面，一直到队列被清空。

上一篇：[21-栈的压入、弹出序列](../21-栈的压入、弹出序列/)

下一篇：[23-二叉搜索树的后序遍历序列](../23-二叉搜索树的后序遍历序列/)