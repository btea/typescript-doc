/**
 * public 公开的，可以供自己、子类以及其他类访问
 * protected 受保护的，可以供自己、子类访问，但是其他就访问不了
 * private 私有的，只有自己访问，而子类、其他都访问不了
*/
class Modifier{
    public name: string
    protected age: number
    private money: number

    constructor(name: string, age: number, money: number){
        this.name = name;
        this.age = age;
        this.money = money;
    }
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
    getMoney():number{
        return this.money;
    }
}
let p = new Modifier('name',25,10000);
console.log(p);
console.log(p.name);
// console.log(p.age); 报错
// console.log(p.money); 报错


/**
 * 静态属性、静态方法，和es6差不多
*/
class Persons{
    // 这是类的静态属性
    static names = 'name'
    // 这是类的静态方法，需要通过这个类去调用
    static say(){
        console.log('hello world!');
    }
}
let ps = new Persons();
Persons.say(); // hello world
// ps.say(): // 报错