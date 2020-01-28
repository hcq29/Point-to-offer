
var inStack = [];
var outStack = [];
function push(node) {
    // write code here
    inStack.push(node);
}
function pop() {
    // write code here
    if (!outStack.length)
        while (inStack.length) outStack.push(inStack.pop());
    return outStack.pop();
}

push(4);
push(3);
push(2);
push(1);
push(0);

console.log(inStack);

console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());