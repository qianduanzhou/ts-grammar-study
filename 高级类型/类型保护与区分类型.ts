/**
 * 联合类型适合于那些值可以为不同类型的情况。 但当我们想确切地了解是否为 Fish时怎么办？ 
 * JavaScript里常用来区分2个可能值的方法是检查成员是否存在。 
 * 如之前提及的，我们只能访问联合类型中共同拥有的成员。
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
// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
//为了让这段代码工作，我们要使用类型断言：
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
export default ''