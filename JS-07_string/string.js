//? =====================================
//?                String
//? =====================================

const string1 = "string";
const string2 = "string";
const string3 = `string`;
const string4 = new String("string"); //? constructor

console.log(typeof string1);
console.log(typeof string2);
console.log(typeof string3);
console.log(typeof string4);

const string5 = "45"; //? string (number degil)

// const isim = prompt("isminizi giriniz:"); //? string
// console.log(typeof isim);

// const isim2 = +prompt("isminizi giriniz:"); //? number
// console.log(typeof isim);
console.log("----------------");

const string6 = "🍔"; //? tirnak arasinda oldugu icin string

//? =====================================
//?         Escape karakterleri
//? =====================================

const mert = "berkin silgisini";
console.log(mert);

// "\t" = paragraf basina bosluk verir
// "\n" = alt satira gecer
const paragraf = "\tHoi Meneer \n Hoe gaat het";
console.log(paragraf);
console.log("----------------");

//? =====================================
//?      String yapisi ve indexleme
//? =====================================

let course = "Javascript";
console.log(course[0]);
console.log(course[1]);
console.log(course[2]);
console.log(course[3]);

// Stringler, primative bir tur oldugu icin parca olarak degistirilemez
// immmutable - not mutable
// tamamen degisebilir
course[6] = "b";
console.log(course);

// course icindeki "Javascript" degisti,Javascript is the best oldu
course = "Javascript is the best";
console.log(course);
console.log("----------");

//? =====================================
//?    String Methods and Properties
//? =====================================

//? property string'in kendi ozelligidir bir method
//? (fonksiyon) degildir bu nedenle parantez acip kapatmaya gerek yoktur

//* lenght
//* prototype

// course degiskeni kac karakterden olusuyor
console.log(course.length);
console.log("--------");

//! string'in karakterlerini tek tek yazdirma
// bir kelimenin harflerini tek tek yazdirir
// stringler 0. karakterden basliyor o yuzden i=0
for (let i = 0; i < course.length; i++) {
  console.log(course[i]);
}
console.log("--------");

// emojiler 2 karakter kaplar
const emoji = "🍗";
console.log(emoji.length);

//! -------------- String Methods --------------
//? string methodlari () seklinde kullanilir
//? birden fazla method birlikte kullanilabilir

// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.
console.log("------------");

//? =====================================
//?         String Birlestirme
//?      +, concat, temlate literal
//? =====================================

const b1 = "Hoi";
const b2 = "Meneer";
console.log(b1 + " " + b2);

//*********************************/
//*          Concat()
//********************************/
let = yeniKelime = b1.concat(b2);
console.log(b1);
console.log(b2);
console.log(yeniKelime);
console.log("--------------------");

//*********************************/
//*          Template Literal()
//********************************/

const ad = "Mert";
const soyad = "Kaya";

// backtikler kullanilir
// degiskenleri ${} icerisine aliyoruz
const fullName = `Merhaba ${ad} ${soyad} nasilsin.
bugun github repo'mu duzenledim
aynisini sana da tavsiye ederim`;
console.log(fullName);
console.log("--------------");

//*********************************/
//*        toUpperCase()
//********************************/
//? karakterleri buyuk harf'e donusturur

const buyukHarf = "Bugun hava gunesli";
console.log(buyukHarf);

// buyuk olarak yazdirdi ve yeni bir degiskene atadik artik yeni degisken buyuk harfli sekilde BUGUN HAVA GUNESLI oldu
const yeniBuyukHarf = buyukHarf.toUpperCase();
console.log(yeniBuyukHarf);
console.log("-----------------");

//*********************************/
//*        toLowerCase()
//********************************/
//? Karakterleri kucuk harf'e donusturur

const kucukHarf = "Kucuk HARF deneme";
console.log(kucukHarf);

const yeniKucukHarf = kucukHarf.toLowerCase();
console.log(yeniKucukHarf);
console.log("---------------");

//! kullanicidan aldigi isim'i "Hosgeldin AD(buyuk harfle)" yazdiran kod

// let isim = prompt("Lutfen adinizi giriniz");
// console.log(`Hosgeldin ${isim.toUpperCase()}`);
// console.log("-----------");

// =====================================
//              split
//  split parcaladigi bolumleri diziye cevirir
// =====================================

//? cumleleri speratore(ayirici) gore parcalama -immutable(kalici degisiklik yapmaz)

// str.split(separator)

let metin1 = "I love Javascript";

console.log(metin1.split());
console.log(metin1);
console.log("---------");

// 3'e parcaladi(" ") oldugu icin bosluklardan boldu "I" "love" "Javascript"
let splitMetin = metin1.split(" ");
console.log(splitMetin);
console.log("---------");

for (let i = 0; i < splitMetin.length; i++) {
  if (splitMetin[i] === "I") {
    console.log(`'I' kelimesi cumlenin ${i + 1}. elamanidir`);
  }
}
console.log("--------------");

// aylari ayirmak
let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Sep / Nov / Dec";
console.log(months.split("/"));
console.log("------");

let tarih = "12.12.2023";

let buhunTarih = tarih.split(".");
console.log(`Bugunun tarihi ${tarih}`);
console.log("---------");

// liste eleman ayirma
let list = "Alparslan ;Mert ;Bilge ;Yigit ;Alp";

// ;'den itibaren ayir ilk 3'i getir
console.log(list.split(";", 3));

//! Join ve Reverse methodlari string methodu degildir, Array methodudur ama split ile cok kullanılir

//? Join methodu
// Birlestirme islemi

// parcaladiktan sonra array oldu ve array methodlarindan join ve reverse kullanılabilir
let newList = list.split(";");
console.log("-------");

// default olarak arasına virgul koyar
// console.log(newList.join())

console.log(newList.join("-"));
console.log(newList);
console.log("-----------");

//? reverse
//! split("") = harfleri alir
//! split(" ") = kelimeleri alir
// reverse methodu ile bir diziyi tersine cevirebiliriz.
// Dizi icerisindeki ilk degeri son, son degeri ise
// ilk sıraya olacak sekilde sıralayabilir

//! harfleri tersine cevirme
let selam = "Hello";
// once split("") ile boldum(parcaladim), reverse ile tersine cevirdim, join diyerek tekrar string hale getirdim
console.log(selam.split("").reverse().join(""));
console.log("-----------");

//! polindrom
let polindrom = "yapay";
let polindromTersten = polindrom.split(" ").reverse().join();

if ((polindrom = polindromTersten)) {
  console.log(`${polindromTersten} kelimesi polindrom'dur`);
} else {
  console.log(`${polindromTersten} kelimesi polindrom degildir`);
}

//! kelimeleri tersine cevirme
let ataSozu = "Kopruyu gecene kadar ayiya dayi derler";
console.log(ataSozu.split(" ").reverse().join());
