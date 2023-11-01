//? =====================================
//?             Arrow
//? =====================================

console.log("------ ARROW ------");

//*! ornek - Parametresiz,donussuz - console.log() degiskeni dondurmuyor
//***************************************** */

// fonksiyonu tanimladim
const yaz = () => console.log("Hello JS");
// fonksiyonu yazdirdim
yaz();
console.log("--------");

//*! ornek - Parametreli
//***************************************** */
const kareAl = (num) => num * num;
console.log("Karesi:", kareAl(3));
console.log("--------");

//* ornek - birden fazla idade(expresison) icerirse
//***************************************** */
//? Arrow fonksiyonunda fonksiyon birden fazla islem icerirse
//? o zaman "{}" kullanilmasi gerekir.
//? "{}" kullanildiginda arrow fonksiyonlarinin otomatik
//? return ozelligi kaybolur.Bu sebeple eger donus isteniyorsa
//? return kullanilmalidir.
const hesapla = (x, y) => {
  const toplam = x + y;
  const carpim = x * y;
  const sonuc = carpim / toplam;
  return sonuc;
};

console.log(hesapla(4, 2));
console.log("--------");

//! ornek : dogum tarihini parametre olarak alan ve ana
//* programa yasini hesaplatip donduran fonksiyon.
//***************************************************** */

// new Date() = bugunun tarihini verir, getFullYear() = yili alir
const yas = (dg) => new Date().getFullYear() - dg;
console.log("Yas:", yas(1998));
console.log("--------");

//! ornek : Silindir hacmi
//***************************************************** */
//? pi*r*r*h
//? 3.14*4*4*5
const silindirHacmi = (r, h) => Math.PI * (r * r) * h;
console.log(`Hacim: ${silindirHacmi(4, 5)}`);
// const silindirHacmi = (r, h) => {
//   Math.PI * (r * r) * h;
//   console.log(`Hacim: ${silindirHacmi(4, 5)}`);
// };
console.log("--------");

//! ornek :Fonksiyon icinde fonksiyon cagirma.(Hesap Makinesi)
//***************************************************** */

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
const carp = (a, b) => a * b;
const bol = (a, b) => a / b;

const hesapMakinesi = (sayi1, sayi2, islem) => {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(sayi1, sayi2);
      break;
    case "-":
      sonuc = cikar(sayi1, sayi2);
      break;
    case "*":
      sonuc = carp(sayi1, sayi2);
      break;
    case "/":
      sonuc = bol(sayi1, sayi2);
      break;
    default:
      console.log("Gecersiz islem operatoru!");
      break;
  }
  return sonuc;
};

const sayi1 = +prompt("Sayi 1'i gir:");
const islem = prompt("Yapmak istediginiz islem: '+,-,*,/'");
1;
const sayi2 = +prompt("Sayi 2'i gir:");

// console.log(hesapMakinesi(sayi1, sayi2, islem));
console.log(
  `${sayi1} ${islem} ${sayi2} = ${hesapMakinesi(sayi1, sayi2, islem)}`
);
