/**
 * 联合类型与交叉类型很有关联，但是使用上却完全不同。 
 * 偶尔你会遇到这种情况，一个代码库希望传入 number或 string类型的参数。
 */
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4);
/**
 * padLeft存在一个问题， padding参数的类型指定成了 any。 
 * 这就是说我们可以传入一个既不是 number也不是 string类型的参数，但是TypeScript却不报错。
 */
function padLeft2(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
let indentedString = padLeft2("Hello world", true);//Error

/**
 * 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
 */
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    return
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
export default ''