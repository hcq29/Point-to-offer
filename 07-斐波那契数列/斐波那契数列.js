
// 剑指offer第七题：斐波那契数列
// 题目描述
//大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
// n<=39。

// Fibonacci数字
// 一个 Fibonacci 数字是之前两个 Fibonacci 数字之和，最前面的两个数字是 0 和 1。按照递归的方式，很有可能会产生很强的尾递归现象导致超时或溢出。

function Fibonacci_1(n) {
    return n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);
}


// 解法一：数组法
// 由于递归的方法时间复杂度太高了，我们不妨试试数组的方法。
function Fibonacci_2(n) {
    let a = [];
    a[0] = 0;
    a[1] = 1;

    for (let i = 2; i <= n; i++) {
        a[i] = a[i - 1] + a[i - 2];
    }
    return a[n];
}


// 解法二：变量法
// 我们定义的数组，造成了空间较大，采用变量存储的方法优化代码。
function Fibonacci_3(n) {
    // write code here
    let i = 0, a = 0, b = 1;
    if (n == 0) return a;
    while (i < n - 1) {
        let c = a + b;
        a = b;
        b = c;
        i++;
    }
    return b;
}
console.log(Fibonacci_3(0));
console.log(Fibonacci_3(1));
console.log(Fibonacci_3(2));
console.log(Fibonacci_3(3));
console.log(Fibonacci_3(4));
console.log(Fibonacci_3(5));
console.log(Fibonacci_3(6));