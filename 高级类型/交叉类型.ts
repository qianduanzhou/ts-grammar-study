/**
 * 交叉类型是将多个类型合并为一个类型。
 * 让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
 */
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log('log')
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
console.log(jim.name);
jim.log();
export default ''