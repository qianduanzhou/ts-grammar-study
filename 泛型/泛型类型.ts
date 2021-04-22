/**
 * 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
 */
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <T>(arg: T) => T = identity;
//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
let myIdentity2: <U>(arg: U) => U = identity;
//我们还可以使用带有调用签名的对象字面量来定义泛型函数：
let myIdentity3: {<T>(arg: T): T} = identity;
//这引导我们去写第一个泛型接口了。
interface GenericTdentityFn {
    <T> (arg: T): T;
}
let myIdentity4: GenericTdentityFn = identity;
/**
 * 一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 
 * 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）
 * 这样接口里的其它成员也能知道这个参数的类型了。
 */
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let myIdentity5: GenericIdentityFn2<number> = identity;
