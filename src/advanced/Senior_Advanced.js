// 交叉类型
var mergeObjects = function (object1, object2) {
    var res = {};
    res = Object.assign(object1, object2);
    return res;
};
mergeObjects({ name: 'korea' }, { age: 10 });
// 联合类型
var getLengthFunc = function (args) {
    /*if (typeof args === 'string') return args.length
    else return args.toString().length*/
    return typeof args === "string" ? args.length : args.toString().length;
};
console.log(getLengthFunc('demo_korea'));
