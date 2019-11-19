var str = 'korea';
var num = 18;
var hobby = ['sport', 'codeing', 'sleeping'];
var student = true;
var address = {
    city: '惠来',
    address: '华清'
};
console.log({
    str: str,
    num: num,
    hobby: hobby,
    student: student ? 'korea' : 'demp',
    address: address
});
// TODO never 应用于处理错误的情况
var error = function (msg) {
    throw new Error(msg);
};
// TODO 类型断言
var obj = 'korea is you father';
var replaceStr = obj.replace(/korea/, 'demo');
console.log(replaceStr);
