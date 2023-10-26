console.log("Variables and DataTypes");

// numberOfStudents'a deger atadik
const numberOfStudents = 5.2;
// yazdirdik
console.log(numberOfStudents);
// veri turunu ogrendik
console.log(typeof numberOfStudents);

// price'a deger atadik
const price = "5.2";
// yazdirdik
console.log(price);
// veri turunu ogrendik
console.log(typeof price);
// datatypes.js:17 Uncaught TypeError: Assignment to constant variable.
// price = price + 1000;

//? Degisken tanımlama keyword'u kullanılmasa bile JS derleyicisi yeni gelen degiskeni otomatik olarak tanimlar. degisken tanimlama keyword'u tanimlamadigimiz icin JS bunu "var" olarak kabul ediyor bunu yapmamiz lazim
counter = 11;
console.log(counter);

// yazi1 ve yazi2'yi tanimladim daha sonra toplama yaptim ama string'de toplama olmadigi icin birlestirme yapiyor
const yazi1 = "Merabalaar";
const yazi2 = "yazilim";
const sonuc = yazi1 + yazi2;
console.log(sonuc);

// string ile number toplanmayacagi icin birlestirir.
const yazi3 = "5";
const yazi4 = 10;
const sonuc2 = yazi3 + yazi4;
console.log(sonuc2);

//? NaN (not a number) string'den number'i cikaramaz
const girdi1 = "bes";
const girdi2 = 10;
const cikti = girdi1 - girdi2;
console.log(cikti);

// LET
// ilkel yontem
let sayac;
sayac = 5;
let kisi = 7;
// yazdir
console.log("Sayac:" + sayac + " " + "Kisi" + kisi);
// yeni atama yap yazdir
sayac = sayac + 5;
console.log("Sayac:", sayac);

sayac = true;
console.log(sayac, typeof sayac);

// JS bir degiskenin turunu icerisindeki degere gore belirler
let myNumber;
// undefined = belli olmayan veri tipi
console.log(myNumber);

//? null ( yokluk, hiclik)
console.log(typeof null);
console.log(typeof undefined); //? undefined
console.log(typeof NaN); //? number

// yukarıdan asagiya uygulamanin neresinde bir degisken gorurse var ile atanmis onu alip en yukariya goturuyor her yerde gecerli olmasini saglamak icin
// var degiskenleri global degiskenlerdir
var coordinate = 123.01;
coordinate = 4;
console.log(coordinate);

var xCord;
console.log(xCord);

yCord = 5;
var yCord;
console.log(yCord);

//? SCOPE

//? blok alani
{
  // normalde hata vermesi lazim cunki bir degiskeni bir kere kullanabiliriz ama suslu parantez ac kapa yaparak yeni bir block alani olusturduk
  let myNumber = 6; //? local number
  console.log("MyNumber=", myNumber); //? 6
}
console.log("MyNumber=", myNumber); //? global alandaki myNumber -- undefined

//? var - let farki
// VAR (GLOBAL SCOPE)
{
  // var ile scope icerisinde degisken tanimlandiginde bu degisken cope'a bagli olmaz (global)
  var varVar = "ZZ"; //? global degiskene deger aktarildi
}
console.log(varVar);

{
  // LET-COST (Block-Scope) sadece scope iceriisnde validtir
  let letVar = "AA"; //? local degiskene deger aktarildi
}
// datatypes.js:100 Uncaught ReferenceError: letVar is not defined
// console.log(letVar); //? hata verir cunku degiskeni block icerisinde atandi

// daha net bir sekilde acikladim var-let farkini
var sayi1 = 1; //? hoisted
let sayi2 = 2; //? global sayi2
{
  var sayi1 = 111; //? hoistingden dolayi aynı global degiskene deger aktarir
  let sayi2 = 222; //? sayi2 222 olarak guncellendi
  console.log(sayi2); //? local sayi2 --> 111
}
console.log(sayi1, sayi2);
