/**
 * 对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名。 
 * 这确保了目标函数可以在所有源函数可调用的地方调用。
 */
function A(a, b): void
function A(a, b): number {
    return a + b
}
export default ''