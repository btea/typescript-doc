/**
 * 任意值(Any)用来表示允许赋值为任意类型
 * 任意值类型
*/
// 如果一个普通类型，在赋值过程中改变类型是不允许的
var Num = 'seven';
// Num = 7; // 报错
// 如果是any类型，则被允许赋值为任意类型
var Num1 = 'seven';
// Num1 = 7;
/**
 * 任意值得属性和方法
*/
// 在任意值上访问任何属性都是允许的：
var anyThing = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
