/**
 * 布尔值
 */
let isDone: boolean = false;

/**
 * 数字
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binartLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/**
 * 字符串
 */
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`;

/**
 * 数组
 * 两种定义方式 
 * 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
 * 第二种方式是使用数组泛型，Array<元素类型>
 */
let lists: number[] = [1, 2, 3];
// let lists: Array<number> = [1, 2, 3];

/**
 * 元组Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
//比如，你可以定义一对值分别为 string和number类型的元组。
let x: [string, number];
x = ['hello', 123];//OK
// x = [10, 'hello'];//Error
//当访问一个已知索引的元素，会得到正确的类型：
x[0].substr(1)//OK
// x[1].substr(1)//Error, 'number' does not have 'substr'

/**
 * 枚举 enum
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 */
//默认从零开始编号
enum Color {Red, Green, Blue};
let c: Color = Color.Green;//1
//可以自定义编号
enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;//2
//或者全部自定义
enum Color3 {Red = 1, Green = 4, Blue = 5};
let c3: Color3 = Color3.Green;//4
//枚举可以得到名字
let GreenName = Color[1];//Green

/**
 * Any
 * 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
 * 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
 */
let notSure: any = 4;
notSure = 'str';
notSure = false;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed();// okay, toFixed exists (but the compiler doesn't check)
let list: any[] = [1, true, 'aa'];
list[1] = 100;

/**
 * void
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
 */
function warnUser(): void {
    console.log('warning')
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

/**
 * Null 和 Undefined
 * undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
 */
let u: undefined = undefined;
let n: null = null;
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
//当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 tsc demo.ts --strictNullChecks
let num: number = 123;
num = undefined;

/**
 * Never
 * never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
 * 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 * never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 
 * 即使 any也不可以赋值给never。
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * Object
 * object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 * 使用object类型，就可以更好的表示像Object.create这样的API
 */
declare function create(o: object | null): void;
// create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

/**
 * 类型断言
 * 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
 * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，
 * 只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
 */
//第一种语法
let someValue: any = 'value';
let strLength: number = (<string>someValue).length;
//第二种语法
let strLength2: number = (someValue as string).length;
export default 111