/**
 * TypeScript里的每个函数参数都是必须的。 
 * 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。
 * 编译器还会假设只有这些参数会被传递进函数。 
 * 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
 */
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
let result1 = buildName("Bob");//错误，缺少参数
let result2 = buildName("Bob", "Adams", "Sr.");//错误，多出参数
let result3 = buildName("Bob", "Adams");
/**
 * JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 
 * 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：
 * 可选参数必须跟在必须参数后面。 我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。
 */
function buildName2(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}
let result21 = buildName2("Bob");
let result22 = buildName2("Bob", "Adams", "Sr.");//错误，多出参数
let result23 = buildName2("Bob", "Adams");
/**
 * 在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。
 * 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为"Smith"。
 * 可选参数与末尾的默认参数共享参数类型。
 */
function buildName3(firstName: string, lastName = 'Smith') {
    return firstName + " " + lastName;
}
/**
 * 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。
 * 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
 */
function buildName4(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
let result41 = buildName4("Bob");                  // error, too few parameters
let result42 = buildName4("Bob", "Adams", "Sr.");  // error, too many parameters
let result43 = buildName4("Bob", "Adams");         // okay and returns "Bob Adams"
let result44 = buildName4(undefined, "Adams");     // okay and returns "Will Adams"
/**
 * 剩余参数
 * 在TypeScript里，你可以把所有参数收集到一个变量里：
 */
function buildName5(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
let employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)