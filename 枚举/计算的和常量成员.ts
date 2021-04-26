/**
 * 每个枚举成员都带有一个值，它可以是 常量或 计算出来的。
 * 当满足如下条件时，枚举成员被当作是常量：
 */
//1.它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
enum E { X }
console.log(E.X)
//2.它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
enum E1 { X, Y, Z }
enum E2 {
    A = 1, B, C
}
console.log(E1.X, E2.A)

/**
 * 枚举成员使用 常量枚举表达式初始化。 
 * 常数枚举表达式是TypeScript表达式的子集，
 * 它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
 */
//1.一个枚举表达式字面量（主要是字符串字面量或数字字面量）
//2.一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
//3.带括号的常量枚举表达式
//4.一元运算符 +, -, ~其中之一应用在了常量枚举表达式
//5.常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
//所有其它情况的枚举成员被当作是需要计算得出的值。
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    KuoHao = (Read),
    Calc = 5 - 4,
    // computed member
    G = "123".length
}
console.log(FileAccess.None, FileAccess.Read, FileAccess.Write, FileAccess.ReadWrite, FileAccess.KuoHao, FileAccess.Calc, FileAccess.G)