# 剑指offer第24题：二叉树中和为某一值的路径

## 题目描述

输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)



## 解题



对于一棵树，想要遍历每一条路径，DFS 是最合适了

### 什么是DFS？

DFS（深度优先搜索），基于递归的思想，就是在一个图或者是在一个树中，对每一个可能的分支路径，深入到不能深入为止，就是说他会从一个节点开始，一直往下走，对于每一个路径来说都需要做到底，比如从一棵树的根节点到每一个叶子结点。



**这时候，在深入的同时，做出某些操作，我们就可以对每一步的数据进行对比跟输出了。**



#### 思路：

第一步： 定义一个数组（栈）`list`表示每一组数据，定义另一个数组`listAll`存放符合条件的一组或者多组数据

第二步：每次将节点压入 `list`中，压入的同时用目标值减去节点的值

第三步： 判断如果 相减的值为0，那么该条路径就是需要的路径，将路径插入到 `listAll`中

第四步：查找节点的左子树和右子树，并重复第二、第三步操作，期间将 `list`中的节点依次弹出

第五步：最终`listAll`存放的就是每一条满足条件的数组，返回`listAll`

```javascript
function FindPath(root, expectNumber)
{
    // ①
    var listAll = [];
    var list = [];
    function find(root, target) {
        if(root === null) return;
        // ②
        list.push(root.val);
        target -= root.val;
        // ③
        if(target === 0 && root.left === null && root.right === null)
            listAll.push(Array.from(list));  // 数组深拷贝
        // ④
        find(root.left, target);
        find(root.right, target);
        list.pop();
    }
    find(root, expectNumber)
    // ⑤
    return listAll;
}
```

以下是另外一种写法

```javascript
function FindPath(root, expectNumber)
{
    // write code here
    function Find(root,target,list,lists){
        list.push(root.val);
        target -= root.val;
        if(target == 0 && root.left == null && root.right == null) 
            lists.push(JSON.parse(JSON.stringify(list))); // 深拷贝
        if(root.left != null) Find(root.left,target,list,lists);
        if(root.right != null) Find(root.right,target,list,lists);
        list.pop();
    }
    
    var lists = [];
    if(root == null) return [];
    Find(root,expectNumber,[],lists);
    return lists;
}
```

上一篇：[23-二叉搜索树的后序遍历序列](../23-二叉搜索树的后序遍历序列/)



下一篇：[25-复杂链表的复制](../25-复杂链表的复制/)