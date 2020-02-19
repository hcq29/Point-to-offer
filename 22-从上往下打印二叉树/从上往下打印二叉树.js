function Tree() {

    // 新结点创建的构造函数
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    // 保存根的属性
    this.root = null;

    // 创建关于二叉搜索树的相关操作方法

    // 插入元素，给用户使用
    Tree.prototype.insert = function (val) {
        // 1、创建新结点
        var newNode = new TreeNode(val);

        // 2、判断是否为空树
        // 2.1如果是空树，则让根的属性指向新结点
        if (this.root == null) {
            this.root = newNode;
        } else {// 2.2如果不是非空树，则寻找合适的位置插入
            this.insertNode(this.root, newNode);
        }
    }

    // 用于内部使用
    Tree.prototype.insertNode = function (node, newNode) {

        // 1、比较结点与新结点的值大小
        // 1.1如果结点的值比新结点的值小
        if (node.val < newNode.val) {
            // 比较结点的右子树为空时插入，不为空时继续往下比较
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else { // 1.2 如果结点的值比新结点的值大
            // 比较结点的左子树为空时插入，不为空时继续往下比较
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }
}

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

// 测试
// 1、创建Tree
var tree = new Tree();

// 2、插入数据
tree.insert(8);
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(10);
tree.insert(9);
tree.insert(11);

console.log(tree);
// 源二叉树 
//     	    8
//     	  /   \
//     	 6    10
//     	/ \   / \
//     5   7 9  11



console.log(PrintFromTopToBottom(tree.root)); // [8, 6, 10, 5, 7, 9, 11]