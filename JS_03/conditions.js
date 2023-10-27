console.log("-----CONDITIONS-----  ");

//! Pozitif - Negatif sayi bulma
sayi1 = 12;
// sayi1 = prompt("Bir sayi giriniz2");

if (sayi1 < 0) {
  console.log("Sayi negatif");
} else if (sayi1 > 0) {
  console.log("Sayi pozitif");
} else {
  console.log("Sayi 0");
}

//! Not
// not = prompt("Notunuzu giriniz")
const not = 14;
let harf_notu = "";

if (not < 0 || not > 100) {
  console.log("Yanlis sayi girdiniz");
} else if (not < 40) {
  harf_notu = "FF";
} else if (not < 55) {
  harf_notu = "DD";
} else if (not < 70) {
  harf_notu = "CC";
} else if (not < 85) {
  harf_notu = "BB";
} else {
  harf_notu = "AA";
}

// harf notu bos gelmiyorsa yani truty ise if'i dondurur
if (harf_notu) {
  console.log("Sonuc:", harf_notu);
}

//! 3 tam sayidan en buyugu bulan algoritma

const s1 = 1;
const s2 = 2;
const s3 = 5;

// //* YONTEM - 1
if (s1 >= s2 && s1 >= s3) {
  console.log("En büyük sayi:", s1);
} else if (s2 >= s1 && s2 >= s3) {
  console.log("En büyük sayi:", s2);
} else if (s3 >= s1 && s3 >= s2) {
  console.log("En büyük sayi:", s3);
}

//* YONTEM - 2 (olmadi)
// nasted if (ic ice if)

const say1 = 1;
const say2 = 2;
const say3 = 5;
if (say1 >= say2) {
  if (say1 >= say3) {
    console.log("En büyük:", say1);
  }
}
if (say2 >= say1) {
  if (say2 >= say3) {
    console.log("En büyük:", say2);
  }
}
if (say3 >= say1) {
  if (say3 >= say2) {
    console.log("En büyük:", say3);
  }
}

if (s1 >= s2) {
  if (s1 >= s3) {
    console.log("En buyuk", s1);
  }
} else if (s2 >= s1) {
  if (s2 >= s3) {
    console.log("En buyuk", s2);
  }
} else if (s3 >= s1) {
  if (s3 >= s2) {
    console.log("En buyuk", n3);
  }
}

//************ TERNARY **************//
//! şu varsa bunu yap yoksa bunu yap ternariy (if-else)

//? if - else gibi calisir
//! 1. YONTEM
// not1 diye degisken olusturduk ona girilen degere gore gecti mi kaldi mi hespalanacak
const not1 = 70;

// not1'e girilen deger 50'den buyuk ya da esitse "Gecti" yazdirsin degilse  "kaldi yazdirsin"
const sonuc = not1 >= 50 ? "Gecti" : "Kaldi";
console.log(sonuc);

//****
let derstenGecen = 0;
let derstenKalan = 0;

// yukaridan aldigimiz not1'i kullandik
not1 >= 50 ? (derstenGecen = derstenGecen + 1) : derstenKalan++;

console.log({ derstenGecen });
console.log({ derstenKalan });

//! 5 yildan fazla calisanlara %10 zam
//? tek kosullu ternary - if() - tek basina if gibi

const calisma_Yili = 5;
let maas = 15000;

// calisma yili 5'e esit ya da buyukse maas * 1.1(%10)'u maasa ata
calisma_Yili >= 5 ? (maas *= 1.1) : "";
console.log(maas);

//******* Short Circuit *******//
//! tek durum varsa short-circuit(tek if)

//? short-circuit yonteminde aradaki operator "&&" ise kosul dogru oldugunda var olan ifadeyi(maas *= 1.1) calistirir aksi takdirde bir sey yapmaz
calisma_Yili >= 5 && (maas *= 1.1);

//? short-circuit yonteminde aradaki operator "||" ise kosul yanlis oldugunda var olan ifadeyi(maas *= 1.1) calistirir aksi takdirde bir sey yapmaz
calisma_Yili >= 5 || (maas *= 1.1);

//******* Nasted Ternary (birden fazla kosul varsa) *******//

//! hiz hesaplama 1
const hiz = 95;
const uyari = hiz >= 120 ? "Cok hizlisin" : "Yavassin";
console.log(uyari);

//! hiz hesaplama 2
const uyari2 =
  hiz >= 120 ? "Hizlisin" : hiz >= 90 ? "Normal hizdasin" : "cok yavassin";
console.log(uyari2);
