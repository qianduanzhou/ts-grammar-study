/**
 * this与箭头函数
 */
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     createCardPicker: function() {
//         return function() {
//             return {suit: this.suits};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log(pickedCard.suit);
/**
 * 箭头函数 
 * 如果你给编译器设置了--noImplicitThis标记。 它会指出 this.suits[pickedSuit]里的this的类型为any。
 */
// let deck2 = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     createCardPicker: () => {
//         return function() {
//             return {suit: this.suits};
//         }
//     }
// }
// let cardPicker2 = deck2.createCardPicker();
// let pickedCard2 = cardPicker2();
// console.log(pickedCard2.suit);
// /**
//  * this.suits[pickedSuit]的类型依旧为any
//  * 这是因为 this来自对象字面量里的函数表达式。 
//  * 修改的方法是，提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面
//  */
function f(this: void) {
    // make sure `this` is unusable in this standalone function
}
interface Card {
    suit: string[];
}
interface Deck3 {
    suits: string[];
    createCardPicker(this: Deck3): () => Card;
}
let deck3: Deck3 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    createCardPicker: function(this: Deck3) {
        return () => {
            return {suit: this.suits};
        }
    }
}
let cardPicker3 = deck3.createCardPicker();
let pickedCard3 = cardPicker3();
console.log(pickedCard3.suit);
/**
 * this参数在回调函数里
 */
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
interface Event {
    message: string
}
let event = <Event>{
    message: '123'
}
let uiElement: UIElement = {
    addClickListener(onclick) {
        onclick(event)
    }
}
class Handler {
    info: string;
    // onClickBad(this: Handler, e: Event) {//使用this: Handler则会导致与接口UIElement不匹配
    //     // oops, used this here. using this callback would crash at runtime
    //     this.info = e.message;
    // },
    // onClickBad(this: void, e: Event) {//使用this: void则会导致this.info无法使用。
    //     // oops, used this here. using this callback would crash at runtime
    //     this.info = e.message;
    // },
    onClickBad = (e: Event) => {//使用箭头函数才能两全其美
        // oops, used this here. using this callback would crash at runtime
        this.info = e.message;
    }
}
let h = new Handler()
uiElement.addClickListener(h.onClickBad);
console.log('h', h)
export default ''