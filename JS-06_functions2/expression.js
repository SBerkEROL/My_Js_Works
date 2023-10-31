//? =====================================
//?             Functions
//? =====================================

console.log("------ 2-Expression -----");

//* ornek-1
//*--------------------------------------

//! ReferenceError: Cannot access 'topla' before initialization
//? bu yontemde hoisting olmadigi icin once fonksiyonun tanimlanmasi sonra kullanilmasi gerekir
// console.log(topla(2, 3));

//? function expression yontemi ile fonksiyon tanimlanmasi
//? fonksiyonun ismi yok onu tasiyan degiskenin ismi var
const topla = function (a, b) {
  return a + b;
};

console.log("Toplamlari:", topla(3, 7));
console.log("--------");

//* ornek-2
//*--------------------------------------

const tekCift = function (num) {
  // sayiyi 2'ye bolunca 1 kaliyorsa(1=True) "Tek yazicak"
  const result = num % 2 ? "Tek" : "Cift";
  return `${num} ${result} `;
};

console.log(tekCift(5));
console.log(tekCift(6));
console.log("---------");

//* ornek 3 en buyuk bulma
//*--------------------------------------

// s1,s2,s3 3 tane parametreyi aliyor
const enBuyukSayi = function (s1, s2, s3) {
  return Math.max(s1, s2, s3);
};

console.log("En buyuk sayi:", enBuyukSayi(3, 5, 7));
