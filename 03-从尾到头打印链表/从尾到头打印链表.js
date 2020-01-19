function linkedList() {

    // 封装一个内部类
    function ListNode(x) {
        this.val = x;
        this.next = null;
    }

    // 属性，声明一个链表头和链表的长度
    this.head = null;
    this.length = 0;

    // 一、追溯方法
    linkedList.prototype.append = function (val) {

        // 1、创建新节点
        var newNode = new ListNode(val);

        // 2、判断添加的是否是第一个节点
        if (this.length == 0) { //2.1是第一个节点
            this.head = newNode;
        } else {                 //2.2不是第一个节点
            // 找到最后一个节点
            var current = this.head;
            while (current.next) {
                current = current.next;
            }

            // 最后的节点的Next指向新的节点
            current.next = newNode;
        }

        // 3、长度要加1
        this.length += 1;
    }

    // 二、toString()
    linkedList.prototype.toString = function () {
        // 1、先定义变量
        var current = this.head;
        var listString = '';

        // 将每次遍历的结果组成字符串
        while (current) {
            listString += current.val + ' ';

            // 加完一个元素后，指向下一个元素
            current = current.next;
        }

        // 返回字符串
        return listString;
    }
}

// 三、输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
// 3.1循环
function printListFromTailToHead(head) {
    var arr = [];
    while (head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}
// 3.2循环
function printListFromTailToHead_2(head) {
    var arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr.reverse();
}
// 3.3递归
function printListFromTailToHead_3(head) {
    var array = [];
    if (head != null) {
        array = printListFromTailToHead(head.next);
    }
    array.push(head.val); 
    return array;
}
// 测试代码
// 创建linkedList
var list = new linkedList();


list.append(67);
list.append(0);
list.append(24);
list.append(58);

console.log(list.toString()); //67 0 24 58 
console.log(printListFromTailToHead(list.head)); //[ 58, 24, 0, 67 ]
console.log(printListFromTailToHead_3(list.head)); //[ 58, 24, 0, 67 ]
