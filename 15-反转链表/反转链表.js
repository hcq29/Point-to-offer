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


//  剑指offer第15题：反转链表
//  题目描述
// 输入一个链表，反转链表后，输出新链表的表头。

//  解题

// 借助三个指针，pre 指向 null，cur 指向 pHead ，temp 记录 cur的下一个结点。
//   - 执行循环操作，如果当前结点不为空的话，一直执行，空则停止：
//   - 先用 temp 保存 cur 的下一个节点的信息，相当于就是 pHead 的下一个结点。保证单链表不会因为失去pHead 节点的原next节点而就此断裂
//   - 保存了next结点之后，让cur 从指向next 变成指向 pre 
//   - pre 再指向 cur ，实现了一次指针反转
//   - 让cur 指向 temp ，实现pre 、temp、cur依次向后移动一个结点，继续下一次的指针反转
// - 如果cur为 null 的时候，pre就到了最后一个结点，链表已经反转完毕，如果需要返回反转链表的结果，pre就是反转后链表的第一个节点

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    var pre = null;
    var cur = pHead;

    while (cur !== null) {
        var temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    return pre;
}


// 测试代码
// 创建linkedList
var list = new linkedList();


list.append(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);

console.log(list);
/**
* linkedList {
*   head: ListNode { val: 0, next: ListNode { val: 1, next: [ListNode] } },
*   length: 8
* }
*/
console.log(ReverseList(list.head));
/**
*
* ListNode {
*   val: 7,
*   next: ListNode { val: 6, next: ListNode { val: 5, next: [ListNode] } }
* }
*/
