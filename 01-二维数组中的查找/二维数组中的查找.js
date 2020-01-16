// 线性查找
function Find1(target, array)
{
    if(array.length == 0 || target == null) return false;
     
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[0].length ; j++){
            if(array[i][j] == target) return true;
        }
    }
    return false;
}

// 从右边查找
function Find2(target, array)
{
    if(array.length == 0 || target == null) return false;
     
    let i = 0,
        j = array[0].length - 1;
     
    while(i < array.length && j >= 0){
        if(array[i][j] == target) return true;
        if(array[i][j] > target) j--;
        else i++;
    }
    return false;
}

var arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(Find2(10, arr)); //true
console.log(Find2(20, arr)); //false