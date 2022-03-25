// IIFE
//立即呼叫的函式表示式
// Intermedia....Invoke Function Expression
//好處：馬上宣告馬上執行，泡泡直接消失掉，在自己的fn裡面不會影響到其他。

// ;(function () {
//   "use strict"
//   console.log(this)
//   console.log(123)
// })()

// 如果在瀏覽器，全域物件是widow
//如果在Node，全域物件是global

//解法：1.let 2.bind 3.setTimeout 3rb parameter

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, i * 1000)
// }
//印出3

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, i * 1000)
// }
// console.log(i)
//not defined& 0 1 2

// for (var i = 0; i < 3; i++) {
//   const fn = function (j) {
//     console.log(j)
//   }.bind(null, i)
//   setTimeout(fn, i * 1000)
// }
//  印出0 1 2
