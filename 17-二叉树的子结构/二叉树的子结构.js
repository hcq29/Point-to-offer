function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function insert(index, data) {
    var p = null;
    if (index >= data.length)  return p;
    if (data[index] != '#') {
        p = new TreeNode(data[index]);
        p.left = insert(index * 2 + 1, data);
        p.right = insert(index * 2 + 2, data);
    }
    return p;
}


var arrA = [8, 8, 7, 9, 2, '#', '#', '#', '#', 4, 7];
var arrB = [8, 9, 2];
var arrC = [8, 2, 2];
var treeA = insert(0, arrA);
var treeB = insert(0, arrB);
var treeC = insert(0, arrC);

//在二叉树 pRoot1 中找到二叉树 pRoot2 的根结点
function HasSubtree(pRoot1, pRoot2) {
    if (pRoot1 == null || pRoot2 == null) return false;   //根据题意，空树不是任意一个树的子结构，还可以说明如果没有寻找到相同的结点，那么就不是子树。
    var flag = false;
    if (pRoot1.val == pRoot2.val) flag = isHasSubtree(pRoot1, pRoot2); // 如果找到相同的结点，就调用判断是否是子树的函数
    if (!flag) flag = HasSubtree(pRoot1.left, pRoot2);  // 上述没有找到，向二叉树 pRoot1 左子树查找
    if (!flag) flag = HasSubtree(pRoot1.right, pRoot2);  // 上述没有找到，向二叉树 pRoot1 右子树查找
    return flag;
}

//这里判断 B 是否是 A 的子树
function isHasSubtree(A, B) {
    if (B == null) return true; // 如果二叉树 B 已经遍历完，说明是二叉树 A 的子树
    if (A == null) return false; //如果二叉树 A 提前遍历完，说明二叉树 B 不是二叉树 A 的子树
    if (A.val != B.val) return false; // 只要期间出现结点不同就立即返回不符合
    return isHasSubtree(A.left, B.left) && isHasSubtree(A.right, B.right);  // 遍历二叉树 A 和二叉树 B 所有的的结点
}


console.log(HasSubtree(treeA, treeB));  // true
console.log(HasSubtree(treeA, treeC));  // false
