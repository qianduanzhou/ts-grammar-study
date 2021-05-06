/**
 * 因为TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型
 */
interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // OK, because y matches structure of x
/**
 * 上面代码里，x和y是兼容的，因为它们的结构使用类型参数时并没有什么不同。 
 * 把这个例子改变一下，增加一个成员，就能看出是如何工作的了：
 */
interface NotEmpty<T> {
    data: T;
}
let x1: NotEmpty<number>;
let y1: NotEmpty<string>;

x1 = y1;  // Error, because x and y are not compatible
/**
 * 在这里，泛型类型在使用时就好比不是一个泛型类型。
 * 对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。 
 * 然后用结果类型进行比较，就像上面第一个例子。
 */
let identity = function<T>(x: T): T {
    return x
}

let reverse = function<U>(y: U): U {
    return y
}

identity = reverse;  // OK, because (x: any) => any matches (y: any) => any
export default ''