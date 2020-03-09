# 剑指offer第18题：二叉树的镜像

## 题目描述

操作给定的二叉树，将其变换为源二叉树的镜像。

### 输入描述:

```
二叉树的镜像定义：源二叉树 
    	    8
    	  /   \
    	 6    10
    	/ \   / \
       5   7 9  11
       
    	镜像二叉树
    	     8
    	   /   \
    	  10    6
    	 / \   / \
    	11 9  7   5
```



## 解题

递归地将结点的左右结点互换，互换的时候即使两数的交换思想，可以采用解构赋值，也可以借助变量暂存替换思想。

重复以下操作：

- 交换结点的左右结点
- 遍历所有的右结点
- 遍历所有的左结点



### 解法一：解构赋值

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(root == null) return ;
    // 解构赋值交换
    [root.right, root.left] = [root.left, root.right];
    
    Mirror(root.right);
    Mirror(root.left);
}
```



### 解法二：变量暂存

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(root == null) return ;
    
    // 交换
    var temp = root.right;
    root.right = root.left;
    root.left = temp;
    
    Mirror(root.right);
    Mirror(root.left);
}
```


上一篇：[17-二叉树的子结构](../17-二叉树的子结构/)

下一篇：[19-顺时针打印矩阵](../19-顺时针打印矩阵/)