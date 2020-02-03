function Power_1(base, exponent)
{
    return Math.pow(base, exponent);
}

function Power_2(base, exponent)
{
    return base ** exponent;
}


// 递归
function Power_3(base, exponent){
    if(exponent === 0) return 1;
    var n = exponent;
    if(exponent < 0) n = 0-exponent;
    var temp = Power_3(base, parseInt(n / 2));
    var result = 1;
    if (n % 2 !== 0) result = base * temp * temp;
    else result = temp * temp;
    return exponent < 0 ? 1 / result : result;
}


// 迭代
function Power_4(base, exponent)
{
    var result = 1.0;
    if(exponent == 0) return 1;
    var n = exponent;
    if(exponent < 0) n = 0-exponent;
    for(var i = 0 ; i < n;i++){
        result *= base;
    }
    return exponent < 0 ? 1 / result : result;
}

console.log(Power_3(2, 1));
console.log(Power_3(2, 2));
console.log(Power_3(2, 3));
console.log(Power_3(2, -1));
console.log(Power_3(2, -2));
console.log(Power_4(2, -3));