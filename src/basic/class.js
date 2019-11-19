var Person = /** @class */ (function () {
    function Person(name, sex) {
        if (sex === void 0) { sex = 'man'; }
        this.name = name;
        this.sex = sex;
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getSex = function () {
        return this.sex;
    };
    return Person;
}());
var korea = new Person('korea', '女');
console.log(korea.getName());
console.log(korea.getSex());
