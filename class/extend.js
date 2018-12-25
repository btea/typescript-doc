var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的继承和es6是差不多的
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }
    Parent.prototype.say = function () {
        return 'hello world';
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, childName) {
        var _this = _super.call(this, name, age) || this;
        _this.childName = childName;
        return _this;
    }
    Child.prototype.childSay = function () {
        return this.childName;
    };
    return Child;
}(Parent));
var child = new Child('parent', 20, 'child');
console.log(child);
