function BinaryTree() {

    // 新结点创建的构造函数
    function TreeNode(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }

    // 保存根的属性
    this.root = null;

    // 创建关于二叉搜索树的相关操作方法
    // 前序遍历
    BinaryTree.prototype.preOrderTraversal = function (fun) {
        // 让preOrderTraversalNode去实现递归操作
        this.preOrderTraversalNode(this.root, fun)
    }

    // 内部使用
    BinaryTree.prototype.preOrderTraversalNode = function (node, fun) {

        if (node) {
            // 1、打印当前结点
            fun(node.val);

            // 2、遍历所有的左子树；
            this.preOrderTraversalNode(node.left, fun);

            // 3、遍历所有的右子树。
            this.preOrderTraversalNode(node.right, fun);
        }
    }

    // 中序遍历
    BinaryTree.prototype.midOrderTraversal = function (fun) {
        // 让midOrderTraversalNode去实现递归操作
        this.midOrderTraversal(this.root, fun)
    }

    // 内部使用
    BinaryTree.prototype.midOrderTraversalNode = function (node, fun) {

        if (node) {

            // 1、遍历所有的左子树；
            this.midOrderTraversalNode(node.left, fun);

            // 2、打印当前结点
            fun(node.val);

            // 3、遍历所有的右子树。
            this.midOrderTraversalNode(node.right, fun);
        }
    }

    // 后序遍历
    BinaryTree.prototype.postOrderTraversal = function (fun) {
        // 让postOrderTraversalNode去实现递归操作
        this.postOrderTraversalNode(this.root, fun)
    }

    // 内部使用
    BinaryTree.prototype.postOrderTraversalNode = function (node, fun) {

        if (node) {

            // 1、遍历所有的左子树；
            this.postOrderTraversalNode(node.left, fun);

            // 2、遍历所有的右子树。
            this.postOrderTraversalNode(node.right, fun);

            // 3、打印当前结点
            fun(node.val);
        }
    }
}

// 新结点创建的构造函数
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// 重建二叉树
function reConstructBinaryTree(pre, vin) {
    // 如果序列个数为0，则返回空
    if (pre.length == 0 || vin.length == 0) return null;

    //记录根节点，将前序遍历的第一个作为根节点，shift()方法是用来获取序列中的第一个元素
    var root = new TreeNode(pre.shift());
    //记录根节点的位置
    var index = vin.indexOf(root.val);

    //递归地将左右节点找出，slice()方法是将数据拆分成两个部分，分别进行下一次递归。
    root.left = reConstructBinaryTree(pre, vin.slice(0, index));
    root.right = reConstructBinaryTree(pre, vin.slice(index + 1));

    return root;
}

// 测试
var pre = [ 1, 2, 4, 7, 3, 5, 6, 8 ];
var vin = [ 4, 7, 2, 1, 5, 3, 8, 6 ];

console.log(reConstructBinaryTree(pre,vin));


// 前序遍历序列
// { 1, 2, 4, 7, 3, 5, 6, 8 }
// 中序遍历序列
// { 4, 7, 2, 1, 5, 3, 8, 6 }

// 二叉树结构
//              1  
//           /     \  
//          2       3    
//         /       / \  
//        4       5   6  
//         \         /  
//          7       8  

