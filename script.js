//1 задание

// let Oleg = new Exam("Михайлов", "Виталий", 5, 4, 5);

// 2 Задани
//1 способ
class Toy {
  constructor(name, age = (3,6,8,10,12), priceRub, priceKop, country) {
    this.name = name;
    this.age = age;
    this.priceRub = priceRub;
    this.priceKop = priceKop;
    this.country = country;
  }
  get fullPrice() {
    return `Цена ${this.priceRub}.${this.priceKop}`;
  }
  toString() {
    return `Название игрушки ${this.name}, Возрастные ограничения ${this.age}+, цена ${this.price}, Страна производителя ${this.country}`;
  }
}
// 2 способ
// function Toy(
//   name,
//   age = ("3+", "6+", "8+", "10+", "12+"),
//   priceRub,
//   priceKop,
//   country
// ) {
//   this.name = name;
//   this.age = age;
//   this.priceRub = priceRub;
//   this.priceKop = priceKop;
//   this.country = country;
//   this.fullPrice = function () {
//     return `Цена ${this.priceRub}.${this.priceKop}`;
//   };
//   this.toString = function () {
//     return `Название игрушки ${this.name}, Возрастные ограничения ${this.age}, цена ${this.price}, Страна производителя ${this.country}`;
//   };
// }

let computerGame = [
  new Toy("Марио", "8", 3, 45, "Литвин" ),
  new Toy("Утка", "3", 4, 0, "Москва"),
  new Toy("Contra", "12", 5, 89, "Питер"),
  new Toy("Fifa", "12", 3, 0, "Челябинск"),
];
computerGame.sort((a,b)=>b.priceKop - a.priceKop)
computerGame.sort((a,b)=>b.priceRub - a.priceRub)
console.log(computerGame) 

//кнопка

document.querySelector(".resAge").addEventListener("click", () => {
let ageFind = document.querySelector(".ageFind")

computerGame.forEach(item => {

    //3
    if (ageFind.value >= item.age )
{
    console.log(item.age)
}

});
  }); 
  //4
let max =1000
computerGame.forEach(item => {

    //3
    if (item.priceRub < max )
{
    max = item.priceRub;
}

});

//самое моелькое
console.log(max)

