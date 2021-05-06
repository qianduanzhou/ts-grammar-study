/**
 * 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 
 * 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
 */
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

class Color {
    color: string
}

let a: Animal;
let s: Size;
let c: Color;

a = s;  // OK
s = a;  // OK
c = a;  // Error
export default ''