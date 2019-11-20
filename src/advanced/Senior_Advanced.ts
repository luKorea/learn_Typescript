// 交叉类型
let mergeObjects = <T, U> (object1: T, object2: U): T & U => {
    let res = {} as T & U;
    res = (Object as any).assign(object1, object2);
    return res;
};
mergeObjects({name: 'korea'}, {age: 10});

// 联合类型
let getLengthFunc = (args: string | number): number => {
    return typeof args === "string" ? args.length : args.toString().length;
};

console.log(getLengthFunc('demo_korea'));