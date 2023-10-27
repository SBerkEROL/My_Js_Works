//************ For ************/
// for (let sayac_baslangici;kosul(true ise donguye girer false ise donguye girmez);sayac_degisim_miktari(en son calistirilir)){tekrarlanan_islemler}

//? 10'a kadar yazdirir
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("--------");

//? 0,5
for (let i = 0; i != 10; i += 5) {
  console.log(i);
}
console.log("--------");

//? Donguye girmez cunku dongu sarti yanlis
for (let i = 1; i == 10; i++) {
  console.log(i);
}

//? Sonsuz dongu i=10'a esit degilse i*2 yap (2-4-8-16) 10'a hic bir zaman esit olmaz
// for (let i = 1; i != 10; i *= 2) {
//   console.log(i);
// }

//? Donguye girmez cunku dongu sarti yanlis
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("--------");

//? 0-100 arasinda n adet rastgele sayi ureten for dongusu
