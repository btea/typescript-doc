/**
 * 对象的类型----接口
 * 在TypeScript中，我们使用接口(interfaces)来定义对象的类型。
 *
 * 在面向对象语言中，接口(Interfaces)是一个重要的概念，它是对行为的抽象，具体如何行动需要由类(classes)去实现(implements)
 * TypeScript中的接口是一个非常灵活的概念，除了可用于 对类的一部分行为进行抽象  以为，也常用于对[对象的形状(Shape)]进行描述
*/
var info = {
    name: 'btea',
    age: 25
};
// 使用 [propName: string] 定义了任意属性取string类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
var info2 = {
    name: 'a',
    age: 10,
    gender: 'male'
};
