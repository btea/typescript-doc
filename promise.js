// function declaration
function setColor(color,time){
    return function(callback){ 
        document.getElementById("lamp").style.backgroundColor=color;
        setTimeout(callback,time)
    }
}
// (function expression)
var queue = function(funcs) {
    (function next() {
        if(funcs.length > 0) {
            var f = funcs.shift();
            f(next);
        }
    })();
};
    
+function tick(){
    queue([
        setColor("red",3000),
        setColor("green",2000),
        setColor("gray",1000),
        tick
    ])
}()