class Person {
    constructor(public name: string, public sex: string = 'man') {
        this.name = name;
        this.sex = sex;
    }
    getName (): string {
        return this.name;
    }
    getSex (): string {
        return this.sex;
    }
}

let korea = new Person('korea', '女');
console.log(korea.getName());
console.log(korea.getSex());