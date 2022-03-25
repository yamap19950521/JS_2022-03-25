//this 這裡(全域物件)
//規則 :誰呼叫，誰就是this
// 沒人呼叫，this->全域物件
//箭頭函數沒有thisㄥarguments
//是否有使用call/apply/bind改變this
//是否使用嚴格模式

// console.log(this) // 印出全域物件(widow)

// const cat = {
//   name: "kitty",
//   age: 8,
//   hello: function () {
//     console.log(this)
//   },
// }
// cat.hello()  印出cat物件 誰呼叫，誰就是this
// hello() 沒人呼叫，this->全域物件

//全域物件有name，他是空白字串

//箭頭函數沒有自己的this跟arguments會往外面去找
//arguent是所有fn都有的變數

// const arguent = 123
// const a = function () {
//   console.log(arguent)
// }
// a("aa", "bb", "cc")

// const arguent = 123
// const a = function () {
//   console.log(arguent)
// }
// a("aa", "bb", "cc")

//使用嚴格模式 寫在fn只有fn有效果，如果不是整份文件都會有效果
// "use strict"
function hello() {
  console.log(this)
}
hello() //印出undefined
//如果沒有使用嚴格模式 會印出全域物件
