var stack=[];
var minStack = [];
function push(node)
{
    stack.push(node);
    if(minStack.length == 0) minStack.push(node);
    else if(node <= minStack[minStack.length - 1]){
        minStack.push(node);
    }
}
function pop()
{
    if(stack[stack.length - 1] == minStack[minStack.length - 1]) minStack.pop()
    return stack.pop();
}
function top()
{
    return stack[stack.length - 1];
}
function min()
{
    return minStack[minStack.length - 1];
}


push(5);
push(4);
push(3);
push(8);
push(10);
push(11);
push(12);
push(1);
console.log('添加5,4,3,8,10,11,12,1后stack = ' + stack);
console.log('被添加到minStack的元素有：' + minStack);

console.log(stack + '  这个栈得栈顶元素是： ' + top())

console.log(stack + '  被弹出的栈顶元素是：' + pop() + ' 最后结果是： ' + stack);
console.log(stack + '栈中的最小值： ' + min());