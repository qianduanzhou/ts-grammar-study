/**
 * 枚举是在运行时真正存在的对象。
 */
function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);
export default ''