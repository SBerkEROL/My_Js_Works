console.log("Operators");

const maas = 80000;
const izinGunu = 30;
console.log(`MAAS=${maas} + Sigorta, izin suresi: ${izinGunu} gun`);

//? template literal'da JS expression kullanmak mumkundur
console.log(`${maas - izinGunu * 400}`);

//? ornek
const name1 = "Alparslan";
const dg = 1970;
console.log(`${name1} is ${2023 - dg} years old`);

//? ornek2
//! prompt fonksiyonu verileri "string" olarak alır
// const name2 = prompt("Please enter your name:");
// const birthday = prompt("please enter your day of birth:");
// console.log(`${name2} is ${2023 - birthday} years old`);
//! new Date().getFullYear() = sistem saatini alır
// console.log(`${name2} is ${new Date().getFullYear() - birthday} years old`);

// new Date() = sistem saatini alır
console.log(new Date());

//* CARPMA VE US ALMA (Multiply, pow)
//*--------------------------------------------------

//? ornek
//?----------------------------------------------------

//! prompt onune '+' koyarak number hale getirebiliriz eger bunu yapmazsak string kabul eder
//! number() fonksiyonu da kullanilabilir
// const r = +prompt("Please enter the radius");
// const r = Number(prompt("Please enter the radius"));
//! asagidakileri kullanmak yerine math kutuphanesinden Pi sayisi cekilebilir
// const pi = 3.14;
// const square = pi * (r ** 2);
//! .toFixed virgulden sonra cok fazla sayi varsa bunlari kisaltmaya yarar
// const square = (Math.PI * r ** 2).toFixed(3);
// console.log(`Square= ${square}`);
// console.log(typeof r);

//? bazi fonksiyonlar

// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.trunc(); //* sayinin tam kismini alir.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

//? yuvarlama fonksiyonlari
console.log(Math.round(1999.123)); //? round() kendisine en yakin sayiya yuvarlar
console.log(Math.ceil(1999.123)); //? ceil() yukari yuvarlar
console.log(Math.ceil(1999.123)); //? floor() asagi yuvarlar

//? tam sayi
console.log(Math.trunc(1999.123)); //? her zaman tam sayiyi alir
console.log((1999.123).toFixed(2)); //? virgülden sonra parantezin icerisine yazilan kadar basamak alir(string olarak)
console.log((1999.123).toExponential(2)); //? ustel gosterim(string)

//? Math.random() 0-1 arasinda rastgele bir sayi uretir
console.log(Math.random()); //? console.log(Math.random()*100) yaparak 0-100 arasi sayi urettirilebilir;

//* ARTTIRMA ve AZALTMA (Inc,Dec)
//*--------------------------------------------------

let number1 = 55;

number1 += 1;
number1++;
++number1;
number1 = number1 + 1;
console.log("Number1:", number1++); //? 59 "number1++" once number1 yazdirip daha sonra degeri arttiriyor

console.log({ number1 }); //? 60

console.log(number1--); //? 60 yazdi daha sonra 1 cikardi

// number1'den 5 cikar geri number1'e ata
number1 -= 5;
console.log(number1); //? 59'du 5 cikardi 54 kaldi

// 54*2
number1 *= 2;
console.log(number1);

//* MOD
//*---------------------------------------------

// sayiyi boler ve kalanini yazdirir
const number2 = 10 % 2;
console.log({ number2 });

//? soru : girilen 3 basamakli sayinin basamak degerini bularak ayri ayri yazdiran kod'u yaz

// const soruNumber = prompt("3 basamakli sayi giriniz:");
//! her seferinde sayi girmemek icin simdilik sabit deger atadim
const soruNumber = 123;

// birler basamagini bulmak icin 10'a bolup kalanini aldim
const birler = soruNumber % 10;
console.log({ birler });

// onlar basamagini bulmak icin sayiyi 10'a boldum(12.3) daha sonra 1'i alabilmek icin sayinin mod'unu aldim(kalani al) sonra cikan sayiyin(2.30000...) Math.trunc() ile tam sayi kismini aldim
const onlar = Math.trunc(soruNumber / 10) % 10;
console.log({ onlar });

// 100ler basamagini bulmak icin sayiyi 100'e boldum cikan sayinin(1.23) Math.trunc() ile tam kismini aldim
const yuzler = Math.trunc(soruNumber / 100);
console.log({ yuzler });

console.log(
  `yuzler basamagi:${yuzler}, onlar basamagi:${onlar}, birler basamagi:${birler}`
);

//*===========================================================
//*               KARSILASTIRMA OPERATORLARI
//*===========================================================

// "==" esit mi diye kontrol eder
console.log(5 == "5"); //? true

// "===" esit mi diye kontrol eder ama string ile number'i esit saymaz
console.log(5 === "5"); //? false

// esit degil mi? 4, 5'e esit degil o yuzden true
console.log(4 != 5); //? true

// number 4, string 4'e tek "=" oldugu icin esit o yuzden false
console.log(4 != "4"); //? false

// number 4, string 4'e çift "==" kullanildigi icin esit degil o yuzden true (degilin degili?)
console.log(4 !== "4"); //? true

// 4, 4'den buyuk mu?
console.log(4 > 4); //? false

// 4, 4'den buyuk ya da esit mi?
console.log(4 >= 4); //? true

// 4, 6'dan kucuk ya da esit mi?
console.log(4 <= 6); //? true

//*===========================================================
//*               Mantiksal Operatorler
//*===========================================================
console.log("---- LOGIC ----");

const d1 = true;
const d2 = false;

// ikisinin de true olmasi lazim (mert ve alp geldi mi?)
console.log(d1 && d2); //? false

// ikisinden birinin true olmasi lazim ( mert veya alp geldi mi?)
console.log(d1 || d2 || false || false); //? true

// d2'nin degil'i (d2 false degil'i true)
console.log(!d2); //? true

//! askerlik gitmeye uygun mu sorgulama
const yas = 18;
const cinsiyet = "e";

// yas 18den buyuk veya esit mi? VE (cinsiyet "E" VEYA "e")
if (yas >= 18 && (cinsiyet === "E" || cinsiyet === "e")) {
  console.log("Askere gidebilir");
} else {
  console.log("Askere gitmeye uygun degil");
}

//! Js'de her zaman falsy olan 6 deger.

const nal = null;
const tanimsiz = undefined;
const bos = "";
const sayiDegil = NaN;
const sifir = 0;
const falsy = false;

// 0 bir number'dir Boolean() fonksyionu onu boolean hale getiriyor
console.log(Boolean(0)); //? false

// 0'in degili
console.log(!0); //? true

//! ornek
let number4 = "2"; //? truty
// let number4 = ""; //? falsy

if (!number4) {
  //? number4 degili true oldugu icin if'e devam edr
  number4 = prompt("Lutfen bir deger giriniz");
}
console.log(number4);

//*===========================================================
//*               Tip Donusumleri
//*===========================================================

// kimlikNo string
const kimlikNo = "123123123123";

// kimlikNo number'a cevrildi
console.log(Number(kimlikNo));

const sayi = "1.2";
const tl = "1000";

const total = Number(sayi) + Number(tl);
console.log(total);

// parseFloat(virgullu sayi) ---eski yontem---
const total1 = parseFloat(sayi) + parseFloat(tl);
console.log(total1);

console.log(Number("25GC3D")); //? NaN
console.log(parseFloat("22k31")); //? NaN (alabildigi kismi aliyor)

console.log(String(123)); //? string hale cevrildi
