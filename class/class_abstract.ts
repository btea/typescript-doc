/**
 * 抽象类和方法，有点类似抽取共性出来，但是又不是具体化
 * 
 * 如果子类继承的是一个抽象类，子类必须实现父类里的抽象方法，不然的话不能实例化，会报错。
 */

/**
 * 关键字 abstract 抽象的意思
 * 首先定义个抽象类Animal
 * Animal 类有一个抽象方法eat
*/
abstract class Animal{
    // 实际上是使用了public修饰符  如果添加private修饰符则会报错
    abstract eat():void;
}

// 需要注意的是，这个Animal类是不能实例化的
// let animal = new Animal(); //报错

/**
 * 抽象类的抽象方法，意思就是，需要在继承这个抽象类的子类中实现这个抽象方法，不然会报错
*/

// 会报错，因为子类中没有实现eat抽象方法
class Person1 extends Animal{
    eat1(){
        console.log('吃米饭')
    }
}
// Dog类继承Animal类后并且实现了抽象方法eat，所以不会报错
class Dog extends Animal{
    eat(){
        console.log('吃骨头');
    }
}