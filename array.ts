/**
 * 数组的类型
 * 在TypeScript中，数组类型有多种定义方式，比较灵活。
*/

/**
 * 类型+方括号  表示法
 * 最简单的方法是使用[类型 + 方括号]表示法
*/
let fibonacci: number[] = [1,1,2,3,5];

// 上例数组的项中  不允许  出现其他类型：
// fibonacci1.push('1'); 
// 往整数数组里面添加string '1'，则会报如下错误
// array.ts:13:17 - error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.

// 20 fibonacci1.push('1');

/**
 * 数组泛型
 * 也可以使用数组泛型(Array Generic)  Array<elemType>来表示数组：
*/
let fibonacci1: Array<number> = [1,1,2,3,5];


/**
 * 用接口表示数组
*/
// 接口也可用来描述数组
interface NumberArray{
    [index :number]: number;
}
let fibonacci2: NumberArray = [1,2,3,4,5];
// NumberArray表示：只要index的数据类型是 number，那么直的类型必须是number


/**
 * any在数组中的应用
 * 一个比较常见的用法是，用 any 表示数组中允许出现任意类型：
*/
let list: any [] = ['x', 10, {website: 'www.baidu.com'}];


/**
 * 类数组
 * 类数组不是数组类型，比如arguments：
*/
function sum(){
    let args: number[] = arguments;
}
//array.ts:49:9 - error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
// Property 'pop' is missing in type 'IArguments'.
// 49     let args: number[] = arguments;
        //    ~~~~

// 事实上，常见的类数组都有自己的接口定义，如IArguments、NodeList、HTMLCollection等
function sum1(){
    let args: IArguments = arguments;
}


