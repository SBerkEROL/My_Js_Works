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
console.log("------------------------");

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
console.log("------------------------");

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
console.log("------------------------");

//*********************************/
//*        toLowerCase()
//********************************/
//? Karakterleri kucuk harf'e donusturur

const kucukHarf = "Kucuk HARF deneme";
console.log(kucukHarf);

const yeniKucukHarf = kucukHarf.toLowerCase();
console.log(yeniKucukHarf);
console.log("------------------------");

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
console.log("------------------------");

// 3'e parcaladi(" ") oldugu icin bosluklardan boldu "I" "love" "Javascript"
let splitMetin = metin1.split(" ");
console.log(splitMetin);
console.log("---------");

for (let i = 0; i < splitMetin.length; i++) {
  if (splitMetin[i] === "I") {
    console.log(`'I' kelimesi cumlenin ${i + 1}. elamanidir`);
  }
}
console.log("------------------------");

// aylari ayirmak
let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Sep / Nov / Dec";
console.log(months.split("/"));
console.log("------------------------");

let tarih = "12.12.2023";

let buhunTarih = tarih.split(".");
console.log(`Bugunun tarihi ${tarih}`);
console.log("------------------------");

// liste eleman ayirma
let list = "Alparslan ;Mert ;Bilge ;Yigit ;Alp";

// ;'den itibaren ayir ilk 3'i getir
console.log(list.split(";", 3));

//! Join ve Reverse methodlari string methodu degildir, Array methodudur ama split ile cok kullanılir

//? Join methodu
// Birlestirme islemi

// parcaladiktan sonra array oldu ve array methodlarindan join ve reverse kullanılabilir
let newList = list.split(";");
console.log("------------------------");

// default olarak arasına virgul koyar
// console.log(newList.join())

console.log(newList.join("-"));
console.log(newList);
console.log("------------------------");

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
console.log("------------------------");

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
console.log("------------------------");

/* -----------------------------------------------------*/
//!             STRING PARÇALAMA-PAÇAYA ERİŞİM          */
//!             Slice, Substring,Substr                 */
/* -----------------------------------------------------*/
//? String içinde bir bölümü almak için kullanılır.(immmutable, kalıcıdeğişiklik olmaz)
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))
// negatif değerler ile tersten gelme yapılabilir

//! Slice Metodu

let ataSozu2 = "Oku da adam ol";
console.log(ataSozu2.slice(7)); //? bitis degeri verilmezse sonuna kadar alir
console.log(ataSozu2.slice(7, 11));
console.log(ataSozu2.slice(-10, -8)); //? negariften alma(sagdan sola)
console.log("------------------------");

//! Substring(başlangıç index numarası,bitiş index numarası)
// Slicedan farkı negatif sayı kullanılmaz

let ataSozu3 = "Kopruyu gecene kadar ayiya, dayi derler";
console.log(ataSozu3.substring(0, 7));
console.log("------------------------");

//! Substr (başlangıç index numarası,kaç adet karakter alınacağı)
// substr üstü çizili(deprecated) kullanımdan kaldırılmış olması değil daha modern olan substirng ve slice kullanımının önerilmesidir.
console.log(ataSozu3.substr(21, 5));
console.log("------------------------");

/* ------------------------------------------------ */
/            Stringde Değişiklik yapma    */;
/* ------------------------------------------------ */

/* /* ------------------------------------------------ */
/*              replace()  ve replaceAll()             */
/* /* ------------------------------------------------ */

// str.replace( ne değiştirecek, ne ile değiştirilecek) (immutable, kalıcı değişiklik yapzmaz)

let ataSozu4 = "Kopruyu gecene kadar ayiya, dayi derler";
console.log(ataSozu4.replace("ayiya", "dayiya"));
console.log(ataSozu4);
console.log("------------------------");

// verilen kullanici adini degisken kurallarina uygun degilse duzenleme

let variable = "kullanIcI adI gIrIsI"; // kullanici_adi

let yeniVariable = variable.replace(" ", "_");
console.log(yeniVariable);
console.log("------");

let yeniDeg = variable.replaceAll("I", "i");
console.log(yeniDeg);
console.log("------------------------");
//? yukaridaki ikisinin tek seferde yapilisi
let variable1 = variable.replaceAll(" ", "_").replaceAll("I", "i");
console.log(variable1);
console.log("------------------------");

/* ---------------------------------------------------- */
//!         String içinde arama işlemleri              */
/* --------------------------------------------------- */
// includes, indexOf, search ,match() metodlarını kullanabiliriz

//! includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.caseSensitive (küçük büyük harfe duyarlı) bir özelliktir.

let ataSozu5 = "Kopruyu gecene kadar ayiya, dayi derler";

console.log(
  `Atsozunde dayi kelimesi geciyor mu?: ${ataSozu5.includes("dayi")}`
);
console.log("------------------------");

let url = "https//google.com";

let msg = url.includes("https")
  ? `bu site guvenlidir`
  : `bu site guvenli degildir`;
console.log(msg);
console.log("------------------------");

let email = "google@gmail.com";

mailGecerli = email.includes("@")
  ? "Mail adresi gecerli"
  : "Mail adresi gecerli degil";

console.log(mailGecerli);
console.log("------------------------");

//! indexOf (aranacak metin, konum)
//? Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir.
//?Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir

// noktayi baz alir com'un
console.log(email.indexOf(".com"));
console.log(email.indexOf("."));

//?
// icinde olmadigi icin -1 ciktisi geldi
console.log(email.indexOf("edu"));
if (email === "edu") {
  console.log("bu bir egitim mail adresi degildir");
} else {
  console.log("bu bir egitim sitesi degildir");
}
console.log("------------------------");

//! search() : bir string içindeki aranan elemanda ilk bulduğunun index numarasını yazar. Bulamazsa -1 dönderir.
// Büyük küçük harfe duyarlıdır.

let metin4 = " Clarusway it bootcamp.Clarusway develop you IT field";

console.log(metin4.search("IT"));
console.log(metin4.search("it"));

// Regex ile çözüm bulunabilir
// Regular Expression
//  Regex / / arasında ifade edilir.

//?   /g => global : bütün cümle için uygula
//?   /i => case sensitive özelliğini kaldırKüçük büyük harfe bakmadan bul

console.log(metin4.search(/IT/gi));

let word = "ynigÜn";

console.log(word.search(/ü/gi));
console.log(word.replaceAll(/ü/gi, "i"));

console.log(word.search(/[aeiıouöü]/i));
console.clear();
/* ------------------------------------- */
/*               match()                       */
/* -------------------------------------------------- */
// string içinde aranan metin bulunur ve bir dizi dönderir.

let text = "Merhaba bugün gerçekten çok sıcak bir Bugün";

console.log(text.match(/bugün/gi));

let say = text.match(/[a]/gi);
console.log(say.length);

/* ------------------------------------------------- */
/*                trim                      */
/* ------------------------------------------------------- */

let sentence1 = "     Clarusway  ";
console.log(sentence1.trim());
console.log(sentence1.trimStart());
console.log(sentence1.trimEnd());
/* ------------------------------------------------------ */
/*                   startsWith,endsWith                   */
/* -------------------------------------------------------- */
// startswith ve endswith true false değer dönderir

metin4 = "Clarusway";
console.log(metin.toUpperCase().startsWith("C"));
console.log(email.toUpperCase().endsWith("COM"));
