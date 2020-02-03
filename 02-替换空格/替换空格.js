function replaceSpace_1(str)
{
    //方法一
    return str.replace(/\s/g, '%20');

}
function replaceSpace_2(str)
{

    //方法二
    return str.split(" ").join("%20");

}
function replaceSpace_3(str)
{
    // 方法三
    strArr = str.split('');
    var result = '';
    for(let i = 0; i < strArr.length; i++){
       if(strArr[i] == ' ')
           result += '%20';
       else 
           result += strArr[i];
    }
    return result;
}
function replaceSpace_4(str)
{
    //方法四
    return encodeURIComponent(str);
}

var str = "We Are Happy";
console.log(replaceSpace_1(str));