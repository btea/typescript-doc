/**
 * 接口
 * 这里的接口，主要是一种规范，规范某些类必须遵守规范，和抽象类有点类似，但是不局限于类，还有属性、方法等。
 * 
 */

/**
 * Object
*/
interface infoInterface{
    name: string,
    age: number,
    citys?: string // 该参数为可选参数
}


/**
 * Array
*/
interface userInterface{
    // index为数组的索引，类型是number
    // 右边是数组里为字符串的数组成员
    [index: number]: string
}
let arr:userInterface = ["name","18"];

