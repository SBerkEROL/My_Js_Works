//* =====================================
//        Donguler(loops) - while
//* =====================================

console.log("-------- WHILE ---------");

// dongu degiskenini while disina yazilmasi lazım. Kosullandirmayi while icine yazilmasi lazim

let i = 0;
while (i < 10) {
  console.log(i);
  //   dongu sayacini degistirmek lazim
  i++;
}
console.log("Dongu sonu");

//!
//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farklı ise kullaniciyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodun while dongusu ile yazilisi

// let not = prompt("Lütfen notunuzu giriniz:");

//? karar yapilari ile bir islem tekrar tekrar yaptirilamaz
//? eger tekrarlanacak bir sey var ise bunun icin dongusel elemanlar kullanilir
// if (not < 0 || not > 100) {
//   alert("Not 0'dan kucuk veya 100'den buyuk olamaz");
// }

let not1 = prompt("Lütfen notunuzu giriniz");
// not 0'dan kucukse veya 100'den buyukse
while (not1 < 0 || not1 > 100) {
  console.log("Not 100'den buyuk veya 0'dan kucuk");
  not1 = prompt("Yeniden notunuzu giriniz");
}
console.log("Girdiginiz not:", not1);

//? for cozumu
// for(sayac;kosul;sayac degisimi)
let not2 = prompt("Lütfen notunuzu giriniz");
// not 0'dan kucukse veya 100'den buyukse
for (; not2 < 0 || not2 > 100; ) {
  console.log("Not 100'den buyuk veya 0'dan kucuk");
  not2 = prompt("Yeniden notunuzu giriniz");
}
console.log("Girdiginiz not:", not2);

//? DO while
let j = 0;

do {
  console.log(j);
  j++;
} while (j < 10);

console.log("Dongu sonu");
