function printListFromTailToHead(head)
{
    var arr = [];
    while(head){
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}

