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
