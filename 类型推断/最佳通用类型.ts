/**
 * 当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型
 */
let x = [0, 1, null];
let zoo = [new Rhino(), new Elephant()];
/**
 * 这里，我们想让zoo被推断为Animal[]类型，但是这个数组里没有对象是Animal类型的，
 * 因此不能推断出这个结果。 为了更正，当候选类型不能使用的时候我们需要明确的指出类型：
 */
let zoo: animal[] = [new Rhino(), new Elephant()];