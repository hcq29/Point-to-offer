function NumberOf1_1(n)
{
    var count = 0;
    if(n < 0)
        n = n & 0xffffffff;
    while(n){
        n = n & (n - 1);
        count++;
    }
    return count;
}

function NumberOf1_2(n)
{
    var count = 0;
    for(var i = 0 ; i < 32; i++){
        if(n % 2 !== 0) count++;
        n = n >> 1;
    }
    return count;
}

function NumberOf1_3(n)
{
    var count = 0;
    for(var i = 0 ; i < 32; i++){
        if(n >> i & 1) count++;
    }
    return count;
}

console.log(NumberOf1_1(-3));
console.log(NumberOf1_3(-5));
console.log(NumberOf1_1(3));
console.log(NumberOf1_1(5));