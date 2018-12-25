
class Person{
    // 这里声明的变量，是实例上的属性
    name: string
    age: number
    constructor(name:string, age: number){
        // this.name和this.age必须在前面先声明好类型
        // name: string  age:number
        this.name = name;
        this.age = age;
    }
    // 原型方法
    say():string{
        return 'hello world'
    }
}

let person = new Person('name',10);