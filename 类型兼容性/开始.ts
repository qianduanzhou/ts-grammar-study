/**
 * TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性。
 */
interface Named {
    name: string;
}
let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;
y = x;//error, 赋值项至少得有被赋值项的所有类型 后类型需≥前，且名字及类型得相同
//检查函数参数时使用相同的规则
function greet(n: Named) {
    console.log('Hello, ' + n.name);
}
greet(y); // OK
export default ''