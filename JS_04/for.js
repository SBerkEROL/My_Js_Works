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

//! 1
// +prompt = numberlastirdi
const n = +prompt("kac tane rastgele sayi uretmek istersin?");

// i=1;i n'den kucuk ise i++=i'yi arttir
for (let i = 1; i <= n; i++) {
  // Math.random 0'la 1 arasi sayi uretir onu da math.round ile en yakin sayiya yuvarliyoruz kusurattan kurtulmak icin *100
  const random = Math.random();
  const randomSayi1 = Math.round(random * 100);
  console.log(random);
  console.log(`${i}.rastgele sayi: ${randomSayi1}`);
}

//! 2
const k = +prompt("kac tane rastgele sayi uretmek istersin?");

for (let i = 1; i <= k; i++) {
  const randomSayi = Math.round(Math.random() * 100);
  console.log(`${i}. rastgele sayi : ${randomSayi}`);
}

//? 2 aralikta verilen dogal sayilarin oplamini bulan kod

//! 1
const n1 = 5;
const n2 = 15;
let toplam = 0;
// j diye degisken kullandim j n1'den baslasin j n2'ye kadar devam etsin
for (let j = n1; j <= n2; j++) {
  //* toplam = toplam + j;
  toplam += j;
}
console.log(toplam);

//! asal sayi

let x = 0;
let y = parseInt(prompt("Sayi giriniz:"));
for (i = 1; i <= y; i++) {
  if (y % i == 0) {
    x++;
  }
}
if (x == 2) {
  console.log("Girdiğiniz sayi asal sayidir");
} else {
  console.log("Girdiğiniz sayi asal sayi degildir.");
}

//? break , continue
// 0'dan basla; i <=10; i'yi 1 arttir
for (let i = 0; i <= 10; i++) {
  if (i <= 5) {
    continue;
  }
  // i= 9 olunca donguyu kir
  if (i === 9) {
    break;
  }

  console.log(i);
}
