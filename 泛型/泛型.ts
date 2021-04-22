/**
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
 */
//不用泛型的话，这个函数可能是下面这样：
function identity(arg: number): number {
    return arg;
}
/**
 * 或者，我们使用any类型来定义函数：
 * 使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。
 * 如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
 */
function identity2(arg: any): any {
    return arg;
}
/**
 * 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 
 * 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
 * 我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 
 */
function identity3<T>(arg: T): T {
    return arg;
}
//我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：
let output = identity3<string>("myString");  // type of output will be 'string'
//第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
output = identity3("myString");