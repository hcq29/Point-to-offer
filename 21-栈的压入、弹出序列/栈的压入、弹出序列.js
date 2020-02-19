
function IsPopOrder(pushV, popV) {
    //创建一个新的数组作为栈
    var newStack = [];
    while (pushV.length != 0) {
        //将pushV中的元素一个一个往新栈放入
        newStack.push(pushV.shift());
        //如果新栈的栈顶元素与popV中的第一个元素相同，则这两个元素出栈。
        while (newStack.length != 0 && newStack[newStack.length - 1] == popV[0]) {
            popV.shift();
            newStack.pop();
        }
    }
    //最后的newStack元素全部出栈就符合
    return newStack.length == 0;
}

function IsPopOrder_2(pushV, popV) {
    if (pushV.length != popV.length) return false;
    var newStack = [];
    for (var i = 0, j = 0; i < pushV.size();) {
        //将pushV中的元素一个一个往新栈放入
        newStack.push(pushV[i++]);
        //通过 j 这个指针移动记录匹配元素
        while (j < popV.length && newStack[newStack.length - 1] == popV[j]) {
            newStack.pop()
            j++;
        }
    }

    return newStack.length == 0;
}
console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));