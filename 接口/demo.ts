/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */
interface LabelledValue {
    size: number;
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
printLabel({size: 10, label: "size 10 object"})

/**
 * 可选属性
 * 可选属性的好处之一是可以对可能存在的属性进行预定义，
 * 好处之二是可以捕获引用了不存在的属性时的错误
 */
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;//绕开检测2(推荐) 使用字符串索引签名
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: 'white', area: 100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        // config.with//这里就会报错，因为拼错了单词
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"})
//绕开检测1 使用类型断言重写
let mySquare1 = createSquare({color: "black",opacity: 0.5} as SquareConfig)
//绕开检测2
let mySquare2 = createSquare({color: "black",opacity: 0.5})

/**
 * 只读属性
 * 只可以读取不能修改
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 20};
// p1.x = 5//error!
//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let a: Array<number> = [1 ,2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 13;//error!
// ro.push(5);//error!
// ro.length = 100;//error!
// a = ro;//error!
a = ro as number[];

/**
 * 函数类型
 * 除了描述带有属性的普通对象外，接口也可以描述函数类型。
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(source, subString) {
    let result = source.search(subString);
    return result > -1;
}
mySearch('zhou', 'h');
//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：
let mySearch2: SearchFunc = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
mySearch2('zhou', 'h');
//函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
let mySearch3: SearchFunc = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
mySearch3('zhou', 'h');

/**
 * 可索引的类型
 * 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 
 * 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
 */
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
// let myArray2: StringArray = [1, 2];//error!
let myArray3 = <StringArray>[]
console.log('myArray', myArray, myArray3)
//TypeScript支持两种索引签名：字符串和数字。可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
interface Okay {// ok
    [x: string]: Animal;
    [x: number]: Dog;
}
// interface NotOkay {// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
//字符串索引签名能够很好的描述dictionary(像NodeList对象)模式，并且它们也会确保所有属性与其返回值类型相匹配。 因为字符串索引声明了 obj.property和obj["property"]两种形式都可以。
interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
//最后，可以将索引签名设置为只读，这样就防止了给索引赋值：
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[1] = "Mallory"; // error!

/**
 * 类类型
 * 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
 */
interface ClockInterface {
    // new (hour: number, minute: number);
    currentTime: Date;
    setTime(d: Date);//你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：
}
class Clock implements ClockInterface {
    currentTime: Date;
    // 当一个类实现了一个接口时，只对其实例部分进行类型检查。constructor存在于类的静态部分，所以不在检查的范围内。
    constructor(h: number, m: number) {}
    setTime(d: Date) {
        this.currentTime = d;
    }
}
//因此，我们应该直接操作类的静态部分。 
//看下面的例子，我们定义了两个接口， ClockConstructor为构造函数所用和ClockInterface为实例方法所用。 
//为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2 {
    tick();
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick()
analog.tick()

/**
 * 继承接口
 * 和类一样，接口也可以相互继承。
 * 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
 */
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let square: Square = {color: "blue", sideLength: 10, penWidth: 5.0,}
let square2 = <Square>{};//另一种写法 区别在于可以不先定义
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/**
 * 混合类型
 * 有时你会希望一个对象可以同时具有上面提到的多种类型。
 * 一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性
 * 在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型。
 */
 interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

/**
 * 接口继承类
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
 * 接口同样会继承到类的private和protected成员。 
 * 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
 */
//SelectableControl包含了Control的所有成员，包括私有成员state。 
//因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 
//因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。
//在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。 
//实际上， SelectableControl接口和拥有select方法的Control类是一样的。 
//Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image和Location类并不是这样的。
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    // state: 5//error!私有属性
    select() { }
}
class TextBox extends Control {
    // state: 5//error!私有属性
    select() { }
}
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }
class Location {

}
export default 111