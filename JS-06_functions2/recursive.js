//? =====================================
//?             Recursive
//? =====================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.
console.log("------Recursive - Recursion?-----");

//?! Faktoriyel donguler
//? 6.5.4.3.2.1
const faktoriyel = (n) => {
  let sonuc = 1;
  for (let i = n; i >= 1; i--) {
    sonuc = sonuc * i;
  }
  return sonuc;
};
console.log(faktoriyel(6));
console.log("----------------");

//?! Recursive
//? 5! = 5.4! -- n! = n.(n-1)!

const recursiveFakt = (n) => {
  // n 1'e esit ise 1 dondur, degil ise n*recursiveFakt(n-1) dondur(fonksiyona yeniden girer)
  if (n <= 1) {
    return 1;
  } else {
    return n * recursiveFakt(n - 1);
  }
};
console.log(recursiveFakt(4));
