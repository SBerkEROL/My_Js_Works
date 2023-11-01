//? =====================================
//?             Arrow
//? =====================================

console.log("------ ARROW ------");

//* ornek - Parametresiz,donussuz - console.log() degiskeni dondurmuyor
//***************************************** */

// fonksiyonu tanimladim
const yaz = () => console.log("Hello JS");
// fonksiyonu yazdirdim
yaz();

//* ornek - Parametreli
//***************************************** */
const kareAl = (num) => num * num;
console.log("Karesi:", kareAl(3));

//* ornek - birden fazla idade(expresison) icerirse
//***************************************** */

const hesapla = (x, y) => {
  const toplam = x + y;
  const carpim = x * y;
  const sonuc = carpim / toplam;
  return sonuc;
};

console.log(hesapla(4, 2));
