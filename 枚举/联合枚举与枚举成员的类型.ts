/**
 * 存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 
 * 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为:
 * 1.任何字符串字面量（例如： "foo"， "bar"， "baz"）
 * 2.任何数字字面量（例如： 1, 100）
 * 3.应用了一元 -符号的数字字面量（例如： -1, -100）
 */
 enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    // kind: ShapeKind.Square,    //    ~~~~~~~~~~~~~~~~ Error!
    kind: ShapeKind.Circle,
    radius: 100,
}
/**
 * 另一个变化是枚举类型本身变成了每个枚举成员的 联合。
 * 类型系统能够利用这样一个事实，它可以知道枚举里的值的集合。 
 */
 enum E {
    Foo,
    Bar,
}
function f(x: E) {
    if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~~
        // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    }
}
export default ''