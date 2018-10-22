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


/**
 * 数组泛型
 * 也可以使用数组泛型(Array Generic)  Array<elemType>来表示数组：
*/
let fibonacci1: Array<number> = [1,1,2,3,5];
