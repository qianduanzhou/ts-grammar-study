/**
 * 剩余参数
 * 在TypeScript里，你可以把所有参数收集到一个变量里：
 */
function buildName5(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
let employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)
export default ''