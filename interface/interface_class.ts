/**
 * 接口是如何规范类的
 * 这个比较重要，因为写react的时候会经常用到
 */

// 首先实现一个接口
interface Animal{
    // 这个类必须有name
    name: string
    // 这个类必须有eat方法，规定eat方法的参数类型以及返回值类型
    eat(any: string):void
}

// 关键字 implements???? 实现
// 因为接口是抽象的，需要通过子类去实现它
class Person1 implements Animal{
    name: string
    constructor(name: string){
        this.name = name;
    }
    eat(any: string):void{
        console.log(`吃${any}`);
    }
}

// 如果想遵循多个接口
// 新增一个接口
interface Animal2{
    sleep():void
}
// 可以在implements后面通过逗号添加，和java一样
// 一个类只能继承一个父类，但是却能 遵循多个接口
class Person2 implements Animal,Animal2{
    name: string
    constructor(name: string){
        this.name = name;
    }
    eat(any: string):void{
        console.log(`吃${any}`);
    }
    sleep(){
        console.log('睡觉');
    }
} 

/**
 * 接口可以继承接口
 * 
*/
interface Animal{
    name: string
    eat(any: string):void
}
// 像类一样，通过extends继承
interface Animal2 extends Animal{
    sleep():void
}
// 因为Animal2类继承了Animal
// 所以这里遵循Animal2就相当于把Animal也继承了
class Person implements Animal2{
    name: string
    constructor(name: string){
        this.name = name;
    }
    eat(any: string):void{
        console.log(`吃${any}`);
    }
    sleep(){
        console.log('睡觉')
    }
}


// [泛型](https://github.com/btea/ts_react_demo_20181207)
