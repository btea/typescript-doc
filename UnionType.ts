/**
 * 联合类型
 * 联合类型(Union Types)表示取值可以为多种类型中的一种。
*/
let type: string | number;
type = 'six';
type = 6;
// type可以为string类型或者number类型，但是若赋值其他类型则会报错


/**
 * 访问联合类型的属性和方法
 * 当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们  "只能访问此联合类型的所有类型里共有的属性和方法"
*/

// function getLength(something: string | number): number{
//     return something.length;
// }
// 报错，原因：length属性只有string类型才有，number类型没有

// string类型和number类型都有toString方法，所以以下写法正常
function getString(something: string | number) : string{
    return something.toString();
}