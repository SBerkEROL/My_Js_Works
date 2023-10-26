console.log("harici app.js kodu calisti");

// sayfaya yazi yazdirir (kullanicinin gordugu alan)
document.write("Dom'a yazi basti");

// ekrana alert gibi bir uyari cikarir ama iptal ya da tamam seklinde
// cevap degiskenine atadik. tamam=true, iptal=false
cevap = confirm("Devam etmek ister misiniz?: EVET/HAYIR");
console.log(cevap);

// tamam'a basilirsa if'i calistir iptal'e basilirsa else'i calistir
if (cevap == true) {
  console.log("TAMAM'a basildi");
} else {
  console.log("iptal'e basildi");
}

// uyari mesaji yazdirmak icin kullanilir
console.warn("UYARI");

// error mesaji yazdirmak icin kullanilir
console.error("ERROR");

// DEGISKEN TANIMLAMA

// const'la atanmis bir verinin degeri baslangicta verilir daha da degistirilemez
const number1 = 5;

// alttaki kod hata verir cunku number1 const ile atanmistir ve degistirilemez
// number1 = number1 + 1;

// number1'in turunu ver
console.log(typeof number1);
console.log(number1);

// number2 let ile atandigi icin degeri degistirilebilir
let number2 = 6.5;
// let ile atadigimiz icin degerini degistirebildik
number2 = number2 + 1;
// degeri 6.5'du +1 yapdik 7.5 oldu
console.log(number2);
console.log(typeof number2);
