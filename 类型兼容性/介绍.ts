/**
 * TypeScript里的类型兼容性是基于结构子类型的。
 * 结构类型是一种只使用其成员来描述类型的方式。
 */
interface Named {
    name: string;
}
class Person {
    name: string;
}
let p: Named;
// OK, because of structural typing
p = new Person();
export default ''