/**
 * 布尔值
 */
var isDone = false;
/**
 * 数字
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binartLiteral = 10;
var octalLiteral = 484;
/**
 * 字符串
 */
var names = "Gene";
var age = 37;
var sentence = "Hello, my name is " + names + ".\nI'll be " + (age + 1) + " years old next month.";
/**
 * 数组
 * 两种定义方式
 * 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
 * 第二种方式是使用数组泛型，Array<元素类型>
 */
var lists = [1, 2, 3];
// let lists: Array<number> = [1, 2, 3];
/**
 * 元组Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
//比如，你可以定义一对值分别为 string和number类型的元组。
var x;
x = ['hello', 123]; //OK
// x = [10, 'hello'];//Error
//当访问一个已知索引的元素，会得到正确的类型：
x[0].substr(1); //OK
// x[1].substr(1)//Error, 'number' does not have 'substr'
/**
 * 枚举 enum
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 */
//默认从零开始编号
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green; //1
//可以自定义编号
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green; //2
//或者全部自定义
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 4] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue";
})(Color3 || (Color3 = {}));
;
var c3 = Color3.Green; //4
//枚举可以得到名字
var GreenName = Color[1]; //Green
/**
 * Any
 * 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
 * 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
 */
var notSure = 4;
notSure = 'str';
notSure = false;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var list = [1, true, 'aa'];
list[1] = 100;
/**
 * void
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
 */
function warnUser() {
    console.log('warning');
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var unusable = undefined;
/**
 * Null 和 Undefined
 * undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
 */
var u = undefined;
var n = null;
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
var num = 123;
num = undefined;
//当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
