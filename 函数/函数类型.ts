/**
 * 为函数定义类型
 */
function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function(x: number, y: number): number { 
    return x + y
};

/**
 * 书写完整函数类型
 * 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 
 * 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号
 */
let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}
//我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性
let myAdd3: (x: number, y: number) => number = function(x1: number, y1: number): number {
    return x1 + y1
}

/**
 * 推断类型
 * 尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型
 */
// myAdd has the full function type
let myAdd4 = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd5: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };