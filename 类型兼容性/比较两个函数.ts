/**
 * 相对来讲，在比较原始类型和对象类型的时候是比较容易理解的，问题是如何判断两个函数是兼容的。
 * 要查看x是否能赋值给y，首先看它们的参数列表。 x的每个参数必须能在y里找到对应类型的参数。
 */
 let x = (a: number) => 0;
 let y = (b: number, s: string) => 0;
 y = x; // OK
 x = y; // Error
/**
 * 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
 */
let x = () => ({name: 'Alice'});
let y = () => ({name: 'Alice', location: 'Seattle'});

x = y; // OK
y = x; // Error, because x() lacks a location property
export default ''