function maxNum(arr){
    if(Array.isArray(arr)){
        return Math.max.apply({},arr);
    }
}


function arrToFun(arr){
    let funcs = [];
    if(Array.isArray(arr)){
        arr.forEach(function(a){
            funcs.push(function(){
                console.log(a);
            })
        })
    }
    funcs.forEach(function(fun){
        fun();
    })
}


function sortObj(arr){
    if(Array.isArray(arr)){
        return arr.sort(function(a, b){
            return Object.keys(a).length - Object.keys(b).length;
        })
    }
}


function fibonacci(n){
    if(n <= 1){
        return [1]
    }
    if(n === 2){
        return [1, 1];
    }
    var arr = [1, 1];
    for(var i = 2; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

Object.prototype.plus = function(num){
    return Number(this) + num;
}
Object.prototype.minius = function(num){
    return Number(this) - num;
}


function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}