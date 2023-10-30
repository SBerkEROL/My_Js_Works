//? Declaration

//? ilk yontem

//! bir fonksiyonu deklare ettim
//? void fonksiyon(retun olmayan fonksiyon - cagrildigi yere bir deger dondurmeyen fonksiyon)
//? parametresi olmayan fonksiyon
function topla() {
  let a = 5;
  let b = 10;
  let sonuc = a + b;
  console.log(sonuc);
}

topla(); //! invoke, calling (fonksiyonu çağırdım)

for (let i = 0; i < 4; i++) {
  topla;
}

//? parametreli fonksiyon

//! ornek 1
// function carp(x, y) {
//   console.log(x * y);
// }

// // hangi degeri girersem onu carpar
// carp(2, 3);

// //! ornek 2
// //? parametreli fonksiyon
// function carp(x, y) {
//   console.log(x * y);
// }
// let s1 = +prompt("Sayi1 giriniz:");
// let s2 = +prompt("Sayi2 giriniz:");

// // hangi degeri girersem onu carpar
// carp(s1, s2);

//? parametreler ornek

//! 1
function yazdir1(name) {
  console.log(`Hi ${name}`);
}
// Mert,alp = name'e gidiyor
yazdir1("Mert");
yazdir1("Alp");
yazdir1("Bilge");

console.log("-------");

//! 2
function yazdir2(lang, name) {
  console.log(`${lang} ${name}`);
}

yazdir2("Halo", "Mert");
yazdir2("hi", "Alp");
yazdir2("Bilge");

console.log("--------");

//! 3
//? 2. parametre default olabilir ama ilk parametre olmaz
//? default parametre ile bos olan yere bir deger atandi
function yazdir3(lang, name = "isimsiz") {
  console.log(`${lang} ${name}`);
}

yazdir3("Halo", "Mert");
yazdir3("hi", "Alp");
yazdir3("Bilge");
