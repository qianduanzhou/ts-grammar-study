/**
 * 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。
 */
//Up使用初始化为 1。 其余的成员会从 1开始自动增长。
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction[1],Direction.Up,Direction.Down)
//默认从0开始
enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction2[1],Direction2.Up,Direction2.Down)
console.log(1 << 2)
/**
 * 数字枚举可以被混入到 计算过的和常量成员（如下所示）。 
 * 简短地说，不带初始化器的枚举或者被放在第一的位置，或者被放在使用了数字常量或其它常量初始化了的枚举后面。
 */
// enum E {
//     A = getSomeValue(),
//     B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }
export default ''