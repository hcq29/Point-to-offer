// 封装单链表
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
}


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    if (pHead1 == null) return pHead2;
    if (pHead2 == null) return pHead1;

    var res = null;
    if (pHead1.val > pHead2.val) {
        res = pHead2;
        res.next = Merge(pHead1, pHead2.next);
    } else {
        res = pHead1;
        res.next = Merge(pHead1.next, pHead2);
    }

    return res;
}

// 非递归方式
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge_2(pHead1, pHead2) {
    var newNode = new ListNode();
    var current = newNode;

    while (pHead1 != null && pHead2 != null) {
        if (pHead1.val < pHead2.val) {
            current.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            current.next = pHead2;
            pHead2 = pHead2.next;
        }
        current = current.next;
    }

    if (pHead1 != null) current.next = pHead1;
    if (pHead2 != null) current.next = pHead2;

    return newNode.next;
}


// 测试代码
// 创建linkedList
var list1 = new linkedList();
var list2 = new linkedList();


list1.append(1);
list1.append(3);

list2.append(2);
list2.append(3);
list2.append(4);
console.log(list1);
/**
 * linkedList {
 *    head: ListNode { val: 1, next: ListNode { val: 3, next: null } },
 *    length: 2
 * }
 */

console.log(list2);
/**
 * linkedList {
 *    head: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: null } } },
 *    length: 3
 * }
 */

console.log(Merge(list1.head, list2.head));
/**
 * ListNode {
 *      val: 1,
 *      next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 3, next: ListNode { val: 4, next: null } } } }
 *   }
 */