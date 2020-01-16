function replaceSpace(str)
{
    //方法一
    return str.replace(/\s/g, '%20');
    //方法二
    //return str.split(" ").join("%20");
    //方法三
    //strArr = str.split('');
    //var result = '';
    //for(let i = 0; i < strArr.length; i++){
    //    if(strArr[i] == ' ')
    //        result += '%20';
    //    else 
    //        result += strArr[i];
    //}
    //return result;
    
    //方法四
    //return encodeURIComponent(str);
}

var str = "We Are Happy";
console.log(replaceSpace(str));