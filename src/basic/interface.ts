interface Circle {
    color: string
    area: number
}

interface CircleConfig {
    color?: string
    radius?: number
    // TODO 索引签名
    [propsName: string]: any
}

let createCircle = (config: CircleConfig): Circle => {
    let newCircle = {color: '#008c8c', area: 100}
    if (config.color) {
        newCircle.color = config.color;
    } if (config.radius) {
        newCircle.area = Math.PI * config.radius * config.radius;
    }
    return newCircle;
};

let circle = createCircle({radius: 10});
console.log(circle);
// 函数约束

interface Max {
    (number1: number, number2: number): boolean
}
let getMax: Max = (number1, number2) => {
    return number1 > number2;
};
console.log(getMax(10, 20));

