function BinarySearchTree() {

    // 新结点创建的构造函数
    function Node(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    // 保存根的属性
    this.root = null;

    // 创建关于二叉搜索树的相关操作方法

    // 插入元素，给用户使用
    BinarySearchTree.prototype.insert = function (val) {
        // 1、创建新结点
        var newNode = new Node(val);

        // 2、判断是否为空树
        // 2.1如果是空树，则让根的属性指向新结点
        if (this.root == null) {
            this.root = newNode;
        } else {// 2.2如果不是非空树，则寻找合适的位置插入
            this.insertNode(this.root, newNode);
        }
    }

    // 用于内部使用
    BinarySearchTree.prototype.insertNode = function (node, newNode) {

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


function VerifySquenceOfBST(sequence) {
    // write code here
    var length = sequence.length;
    if (length == 0) return false;

    var i = 0;

    while (--length) {

        while (sequence[i] < sequence[length]) i++;
        while (sequence[i] > sequence[length]) i++;

        if (i < length) return false;
        i = 0;
    }
    return true;
}


// 测试
// 1、创建BinarySearchTree
var bst = new BinarySearchTree();

// 2、插入数据
bst.insert(18);
bst.insert(4);
bst.insert(30);
bst.insert(2);
bst.insert(7);
bst.insert(24);
bst.insert(20);

console.log(bst)



var bstArr = [2, 7, 4, 20, 24, 30, 18]

console.log(VerifySquenceOfBST(bstArr))