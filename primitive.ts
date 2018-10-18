// https://ts.xcatliu.com/basics/any.html
// 原始数据类型
// JavaScript的类型分为两种：原始数据类型(Primitive data types)和对象类型（Object types）
// 原始数据类型包括：布尔值、数值、字符串、null、undefined以及ES6新类型 Symbol

/**
 * 布尔值
*/
let isDone:boolean = false;

// 使用Boolean构造函数创造的对象不是布尔值，而是一个Boolean对象
// let createdByNewBoolean: boolean = new Boolean(1);  // 这种写法会报错


/**
 * 数值
 * 使用number定义数值类型
*/
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

// ES6中的二进制表示法
let binaryLiteral: number = 0b1010;  // 编译之后转换为10进制 10

// ES6中八进制表示法
let octalLiteral: number = 0o744; // 转换为10进制 484
let notNumber: number = NaN;
let infinityNumber: number = Infinity;


/**
 * 字符串
 * 使用string定义字符串类型：
*/

let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


/**
 * 空值
 * JavaScript没有空值(Void)的概念，在TypeScript，可以用void表示没有任何返回值的函数
*/
function alertName(): void{
    alert('My name is Tom')
}
// 声明一个void类型的变量没有什么用，因为只能将它赋值为null或undefined
let unsable: void = undefined;


/**
 * Null  Undefined
*/
// 在ts中可以，可以使用null和undefined来定义这两个原始数据类型：
let u:undefined = undefined;
let n:null = null;
// undefined类型的变量只能赋值为undefined，null类型的变量只能赋值为null。

// 与void的区别是， undefined和null是所有类型的子类型。也就是说undefined类型的变量，可以赋值给number类型的变量。
// 这样不会报错
let num1: number = undefined;
// 这样也不会报错
let u1: undefined;
let num2: number = u;

// 而void类型的变量不能赋值给number类型的变量
let u2: void;
// let num: number = u2;  // 报错

/**
 * 未声明类型的变量
 * 变量如果在声明的时候，未指定其类型，那么它被识别为任意类型
*/