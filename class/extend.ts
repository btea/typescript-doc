// 类的继承和es6是差不多的
class Parent{
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    say():string{
        return 'hello world';
    }
}

class Child extends Parent{
    childName: string
    constructor(name: string, age: number, childName: string){
        super(name,age);
        this.childName = childName;
    }
    childSay():string{
        return this.childName;
    }
}
let child = new Child('parent',20,'child');
console.log(child);