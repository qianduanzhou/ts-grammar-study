/**
 * 使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 
 * 换句话说，你必须把这些参数当做是任意或所有类型。
 */
//这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。
function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
//我们可以像创建其它数组一样创建这个数组：
function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
loggingIdentity2([1,2,3])