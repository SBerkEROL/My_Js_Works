//? =====================================
//?             Scope
//? =====================================

console.log("---------Scope-------");

//? Global degiskenler
let num1 = 55;
let num2 = 11;

const fonk1 = () => {
  let num1 = 22; //? function-scoped degisken
  num1++;
  return num1;
};

console.log(num1); //? global num1

const num3 = fonk1(); //? fonksiyondan gelen deger num3 adindaki global degiskene aktarildi
console.log(num3); //? 23 global scope

//! Uncaught SyntaxError: Identifier 'num1' has already been declared (aynı scope'da aynı isimle degisken tanilmayamazsin)
// const num1 = 95;

{
  let x = 7;
  x++;
  let y = x + 20;
  console.log(y); //? blocked scope degisken
}
// console.log(y);  //! Burası Global scope: Uncaught ReferenceError: y is not defined

//? Var (moden js ile artik kullanilmiyor)

num5 = 123;
var num5; //? hoisted(en yukariya tasinmiş gibi olur)
console.log(num5);
