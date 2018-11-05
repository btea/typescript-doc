/**
 * 函数是javascript中的一等公民
*/

/**
 * 函数声明
 * 在js中，有两种常见的定义函数的方式-----函数声明(Function Declaration)和函数表达式(Function Expression)
 * https://ts.xcatliu.com/basics/type-of-function.html
 * 注：ts里面函数参数声明之后，不能传不符合定义类型的参数，输入的参数个数既不能多于自定义的参数个数，也不能少于自定义的参数个数
 * 
*/

function eq(o, n){
    var type = ['string','number','boolean','undefined'];
    if(type.indexOf(typeof o) > -1 && type.indexOf(typeof n) > -1){
        return o === n;
    }
    if(o instanceof Array && n instanceof Array){
        if(o.length !== n.length){
            return false;
        }
        for(var i in o){
            if(o[i] !== n[i]){
                return false;
            }
        }
        return true;
    }
    if(o instanceof Object && n instanceof Object){
        var o_p = Object.getOwnPropertyNames(o),n_p = Object.getOwnPropertyNames(n);
        if(o_p.length !== n_p.length){
            return false;
        }
        for(var k in o){
            if(o[k] !== n[k]){
                return false;
            }
        }
        return true;
    }
}