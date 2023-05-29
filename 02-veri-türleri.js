// // Veri türleri, verilerin özelliklerini tanımlar. Veri türleri ikiye ayrılabilir:

// // 1-ilkel veri türleri (primtive date types)
// // 2-İlkel olmayan veri türleri (Nesne Referansları) ,(non-primtive date types )

// İlkel Veri Türleri
// JavaScript'teki ilkel veri türleri şunları içerir:

// (numbers)Sayılar - Tamsayılar, değişkenler
// (strings)Dizeler - Tek alıntı, çift alıntı veya geriye dönük alıntı altındaki herhangi bir veri
// Booleans - doğru veya yanlış değer
// Null - boş değer veya değer yok
// (undefined)Tanımsız - değeri olmayan bildirilen bir değişken.


//JavaScript'teki ilkel olmayan veri türleri şunları içerir:
// nesneler(objects)
// Fonksiyonlar(functions)
// diziler (Arrays)
//ilkel olmayan veri türleri değiştirilebilir




let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)  // eşit mi? true

let js = 'javascript'
let py = 'python'
console.log(js == py) //eşit mi ? false

let nums = [1, 2, 3] //Array
nums[0] = 10
console.log(nums)
//ilk eleman 0 ile başlar
nums[0] //1
nums[1]//2
nums[2]//3


let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]

console.log(nums1 == nums2) //false ilkel olmayan nesneleri vb karşılaştırmayın.

let user1 = {
    name: 'meryem',
    surname: 'kutlu'
}
let user2 = {
    name: 'meryem',
    surname: 'kutlu'
}

console.log(user1 == user2) //false

let user3 = {
    name: 'meryem',
    surname: 'kutlu'
}
let user4 = user3


console.log(user3 == user4) // true referasları bir olduğu için true

Math.PI
console.log(Math.PI) //3.141592653589793 sayılarla çalışmak için method

Math.round(5.49) // 5 //taban
Math.ceil(5.45)//6 // tavan a yuvarlıyor
Math.min(3, 5, -50)//-50
Math.max(3, 6, 10)//10
Math.random()//random sayılar getiriyor
Math.random() * 11 //

let random = Math.random() * 11
Math.floor(Math.random() * 11) //sıfırla on arasında bir değer veriyor bu method sayesinde

//Strings


// let name = 'meryem'
// let surname = 'kutlu'


// let fullName = name + ' ' + surname
// console.log(fullName)

// uzun pragraflar için bir sornraki satırda işlemin devam edeceğini gösteriyor  "lkdkdkdkdkdkddkd/
// jjgjgnjgnjgngjngjgjgjgnjgnjggjgjjngjgnjg/
// "

// /n yeni bir satıra geçecek demek  'benim/nadım/nmeryem/nkutlu'
// benim
// adım
// meryem
// kutlu
//  /t 8 tane boşluk veriyor
// // mer//yem  mer/yem ' ve " da kullanmak gerekiyor örnek: meryem/'in odası olası tırnak işareti karışıklığını önlüyor .


let name = 'meryem'
let surname = 'kutlu'
let a = 2
let b = 5

let fullName = `${name}
  deneme


  ${a}+${b}  ${a * b}


  ${surname}`
console.log(fullName)


//string methodları
// 1-length (uzunluk)
// bir Stringin uzunluğunu öğrenebilirsin
// let youtube = 'meryemkutlu'
// youtube.length = 11

// youtube[1]=e

// 1.yol = 'meryem'.toUpperCase()
// 'MERYEM'

// 2.yol= let word = 'meryem'
// word.toUpperCase()
// 'MERYEM'
// 3.yol= let word = 'meryem'
// word = word.toUpperCase()
// 'MERYEM'

//küçültmek için toLowerCase() kullanılıyor .

// let youtube = 'meryemkutlu'
// youtube.subrtr(5,3) = mkt gibi

// let name ='meryem kutlu'
// name.split('')

// trim (gereksiz boşlukları akldırmaya yarıyor )
// includes (var mı demek ? ör/ let string ='30 Days of javaScript'
//console.log(String.includes('Days')) // true gibi  yazı büyüklüğü küçüklüğü fark ediyor ,(days) yanlış (Days) doğru)
//replace (değiştirmek )
//ör:
/*let string = ' 30 Days Of JavaSrcript'
console.log (string.replace('javaSrctipt','css'));

let str = 'merhaba tayfun,nasılsın tayfun?'
str.replace('tayfun','ahmet')
 sonuç: 'merhaba ahmet,nasılsın tayfun?'
tr.replaceAll('tayfun','ahmet') hepsini ahmet yapar */

// let string = '30 Days Of JavaScript'
// console.log(string.indexOf('D'));
//  //3 indexOf() metodu, bir dizide verilen değeri arar ve ilk eşleşmeyi sağlayan elemanın index değerini verir. Metot en az 1 en fazla 2 parametre alır. 1. parametre aranacak eleman, ikinci parametre aramaya başlanacak index değeridir. İlk parametrede girilen değer aranan olan dizide bulunamazsa sonuç -1 olarak döner.



//LastIndexOf() metodu
 //aynı şekil ama en sonuncuyu döndürüyor . lastIndexOf() metodu, var olan bir dizi içerisinde aradığımız bir elemanın son indeks numarasını geriye döndürür. Eğer aradığımız eleman dizi içerisinde yoksa geriye -1 değerini döndürür.


 //concat() Metodu
// İki ve ya daha fazla diziyi birleştirmek için kullanılır. Bu metod, varolan diziyi değiştirmez. Birleştirilmiş yeni bir dizi döndürür.


// let str = 'JavaScript heyecan verici bir dildir';
// //String nesnesinin belirtilen karakterle ile başlıyor mu kontrol eder.
//   console.log(str.startsWith('JavaScript')); // true
//   console.log(str.startsWith('Java')); // true
//   console.log(str.startsWith('javascript')); // false
 
//   let str = 'JavaScript heyecan verici bir dildir';
//   String nesnesinin belirtilen karakterler ile bitip bitmediğini kontrol eder. startsWith() fonksiyonunun tersi çalışır.
//   console.log(str.endsWith('dildir')); // true
//   console.log(str.endsWith('dir')); // true
//   console.log(str.endsWith('Dildir')); // false
 
// search nedir :
// Metin içinde arama yapmak için search fonksiyonu da kullanılır. JavaScript indexOf ve search metin fonksiyonları aynı işlemi ve sonucu verir. Ancak search fonksiyonu daha gelişmiş arama kriteri yazmayı sağlar.

// regex nedir?
// Regex, bir arama modeli oluşturan karakter dizisidir. Bir metinde veri aradığınızda, aradığınızı tanımlamak için bu arama modelini kullanabilirsiniz. Normal bir ifade, tek bir karakter veya daha karmaşık bir kalıp olabilir.

/*Javascriptte Regex Metodları
exec()	İfadede bir eşleşme araması yürütür. Uyumsuzluk durumunda array veya boş değer döndürür.
test()	İfadedin desen kalıbına uyulma kontrolü yapılır. Method geriye true, false değeri döndürür.
match()	Yakalama grupları da dahil olmak üzere tüm eşleşmeleri içeren Array veya eşleşme bulunamazsa null döndürür.
matchAll()	Yakalama grupları dahil tüm eşleşmeleri içeren bir yineleyici döndürür.
search()	Bir dizedeki eşleşmeyi test eder. Arama başarısız olursa eşleşmenin dizinini veya -1’i döndürür.
replace()	Bir dizede bir eşleşme araması yürütür ve eşleşen alt dizeyi bir yedek alt dizeyle değiştirir.
replaceAll()	Bir dizedeki tüm eşleşmeler için bir arama yürütür ve eşleşen alt dizeleri bir yedek alt dizeyle değiştirir.
split()	Bir dizeyi bir dizi alt dizeye bölmek için normal bir ifade veya sabit bir dize kullanır.
Regex metodları
Bir dizgede bir kalıp bulunup bulunmadığını öğrenmek istediğinizde, test() veya search() yöntemlerini kullanın; daha fazla bilgi (ancak daha yavaş çalışma) için exec() veya match() yöntemlerini kullanın. exec() veya match() kullanırsanız ve eşleşme başarılı olursa, bu yöntemler bir dizi döndürür ve ilişkili düzenli ifade nesnesinin ve ayrıca önceden tanımlanmış düzenli ifade nesnesi RegExp’in özelliklerini günceller. Eşleştirme başarısız olursa, exec() yöntemi null değerini döndürür (yanlış olmaya zorlar).

/\d   (+/ artı bir sayı daha ekliyor ) sayuları temsil ediyor  1 veya daha fazla sayıları yazmış olauyoruz .
/\d+/gi
Regex Bayrakları
Bayrak	Açıklama
d	Alt dizi eşleşmeleri için dizinler oluşturun.
g	Global arama
i	Büyük/küçük harfe duyarsız arama.
m	Multi-line / çok satırlı arama
s	yeni satır karakterlerini eşleştirmek için . izin verir.
u	“unicode”; bir kalıbı bir unicode kod noktaları dizisi olarak ele alın.
y	Hedef dizedeki geçerli konumdan başlayarak eşleşen bir “yapışkan/sticky” arama yapın.*/


//String.repeat(n)
let string = 'love'
console.log(string.repeat(10));

//"operand": türü döndürülecek olan nesne (object) veya primitif veri (string, number, boolean, null, undefined, symbol