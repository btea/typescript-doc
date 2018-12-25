var Person = /** @class */ (function () {
    function Person(name, age) {
        // this.name和this.age必须在前面先声明好类型
        // name: string  age:number
        this.name = name;
        this.age = age;
    }
    // 原型方法
    Person.prototype.say = function () {
        return 'hello world';
    };
    return Person;
}());
var person = new Person('name', 10);
