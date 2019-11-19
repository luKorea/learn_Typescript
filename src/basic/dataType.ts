let str: string = 'korea';
let num: number = 18;
let hobby: string[] = ['sport', 'codeing', 'sleeping'];
let student: boolean = true;
let address: object = {
    city: '惠来',
    address: '华清'
};
console.log({
    str,
    num,
    hobby,
    student: student ? 'korea': 'demp',
    address
});

// TODO never 应用于处理错误的情况
let error = (msg: string): never => {
    throw new Error(msg)
};

// TODO 类型断言
let obj: any = 'korea is you father';

let replaceStr: string = (obj as string).replace(/korea/, 'demo');
console.log(replaceStr);
