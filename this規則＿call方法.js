//.call方法 是預定義的JavaScript 方法。
// 它可以用來調用所有者對像作為參數的方法。
// 通過call()，您能夠使用屬於另一個對象的方法。
//把cat物件帶入hello函數
// const cat = {
//   name: "kitty",
//   age: 18,
// }
// function hello() {
//   console.log(this)
// }
// hello.call(cat)
// hello.apply(cat)
// hello.apple(cat,[1,2,3])
// const newhello = hello.bind(cat, 1, 2, 3)
// newhello()

//call跟apply都可以用，但apply後面的參數要用陣列
//newhello會產生新的函數，在呼叫他

// console.log(hell0.call===function.prototype.call) 會印出true

//bind方法 先fn存起來 this再進來
