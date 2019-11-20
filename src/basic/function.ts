// 函数参数双向协变

let fun1 = (num1: number | string): void => {}
let fun2 = (num1: string): void => {}

// @ts-ignore
fun1 = fun2