//學習內容：Object.create（）、_ _proto_ _

// function heroCreator(name, power) {
//   const hero = {
//     name: name,
//     power: power,
//     attack: function () {
//       console.log("ATTACK!")
//     },
//   }
//   return hero
// }
// const h1 = heroCreator("kk", 100)
// const h2 = heroCreator("jj", 200)
// h1.attack()
// h2.attack()

// function heroCreator(name, power) {
//   const hero = {
//     name,
//     power,
//     //   名字一樣簡化
//     attack: function () {
//       console.log("ATTACK!")
//     },
//   }
//   return hero
// }

// const h1 = heroCreator("kk", 100)
// const h2 = heroCreator("jj", 200)
// h1.attack()
// h2.attack()

// const actions = {
//   attack: function () {
//     console.log("ACTACK!!!!!!!!")
//   },
//   eat: function () {
//     console.log("Ymmmmmm")
//   },
// }

// function heroCreator(name, power) {
//   const hero = Object.create(actions)
//   // Object.create（）指定原型物件及屬性，創建一個新物件
//   hero.name = name
//   hero.power = power
//   return hero
// }

// const h1 = heroCreator("kk", 100)
// const h2 = heroCreator("jj", 200)
// h1.attack()
// h2.attack()
//所有的物件都有_ _proto_ _屬性 :attack:()、eat:()，如果往下一個_ _proto_ _找還是找不到，就會繼續往下找，直到null(Prototype chain原型練)

// const actions = {
//   attack: function () {
//     console.log("ACTACK!!!!!!!!")
//   },
//   eat: function () {
//     console.log("Ymmmmmm")
//   },
// // }

// function heroCreator(name, power) {
//   const hero = Object.create(actions)
//   // Object.create（）指定原型物件及屬性，創建一個新物件
//   this.name = name
//   this.power = power
// }

// const h1 = new heroCreator("kk", 100)
// console.log(h1)
// 如果沒有加new console.log(h1) 沒有return沒有回傳值，會變成undefined
//   加了new之後：，this＝{}(加了一個空物件，this指向他)

// function HeroCreator(name, power) {
//   this.name = name
//   this.power = power
// }

// const actions = {
//   attack: function () {
//     console.log("attack")
//   },
//   eat: function () {
//     console.log("eat")
//   },
// }

// HeroCreator.prototype = actions

// const h1 = new HeroCreator()
// h1.attack()

//不會用到，但查資料知道為什麼這麼寫，通常都是用class寫（js沒有class，是語法糖衣)
//通常都是這樣寫
class Actions {
  attack() {
    console.log("attack")
  }

  eat() {
    console.log("eat")
  }
}

class HeroCreator extends Actions {
  constructor(name, power) {
    super()
    this.name = name
    this.power = power
  }
}

const h1 = new HeroCreator("kk", 100)
h1.attack()
console.log(h1)
