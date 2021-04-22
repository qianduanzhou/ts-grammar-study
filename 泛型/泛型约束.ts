/**
 * 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。
 */
interface lengthwise {
    length: number;
}
function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}
// loggingIdentity(3)//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：number没有length
loggingIdentity([])
/**
 * 在泛型约束中使用类型参数
 * 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
 */
function create<T>(c: new() => T): T {
    return new c();
}
class C {

}
create(C)

//一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!