/**
 * 对象的类型----接口
 * 在TypeScript中，我们使用接口(interfaces)来定义对象的类型。
 * 
 * 在面向对象语言中，接口(Interfaces)是一个重要的概念，它是对行为的抽象，具体如何行动需要由类(classes)去实现(implements)
 * TypeScript中的接口是一个非常灵活的概念，除了可用于 对类的一部分行为进行抽象  以为，也常用于对[对象的形状(Shape)]进行描述
*/

interface Person{
    name: String,
    age: number
}

let info: Person = {
    name: 'btea',
    age: 25
}
// 我们定义了一个接口Person，接着定义一个变量info，它的类型是Person。这样，我们就约束了info的类型必须和接口Person一致。
// 注： 接口一般首字母大写
// 定义的变量属性若是比接口少会报错
// 定义的变量属性若是比接口多同样会报错
// 因此， "赋值的时候，变量的形状必须和接口的形状保持一致"


/**
 * 可选属性
 * 可选属性的含义是该属性可以不存在
*/

interface Person1{
    name: string,
    age?: number // age属性可添加可不添加
}

/**
 * 任意属性
 * 有时候我们希望一个接口允许有任意的属性，可以使用如下方式
*/
interface Person2{
    name: string,
    age?: number,
    [propName: string]: any 
}

// 使用 [propName: string] 定义了任意属性取string类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性

let info2: Person2 = {
    name: 'a',
    age: 10,
    gender: 'male'
}


/**
 * 只读属性
 * 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用readonly定义只读属性
*/


