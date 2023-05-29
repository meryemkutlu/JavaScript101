// function sayHello() {
//     console.log('hello!')

// }

// sayHello()

//Geriye bir şey döndürmediğinde undefined oluyor 

/*let msg = 'merhaba dünya!'

function sayHello() {
    let msg = 'hello world'
    return ['hello', 'world']//msg 
}

let hello = sayHello()
console.log(hello)


// function parametereler:


function multiply(num1, num2) {

    return num1 * num2
}
let total = multiply(5, 2)
console.log('toplam', total)

function mesajGoster() {
    alert('Merhaba millet!');
} // fonksiyon tanımlama 

//Yerel değişkenler :Fonksiyon içinde tanımlanan değişkene sadece o fonksiyon içerisinde erişilebilir.



function mesajGoster() {
    let mesaj = "Merhaba! Ben Javascript"; // Yerel Değişken

    alert(mesaj);
}

mesajGoster(); // Merhaba! Ben Javascript

alert(mesaj); // <-- Hata! Bu değişken `mesajGoster` fonksiyonuna aittir.


//Dış Değişkenler: Fonksiyon, kendi dışında oluşturulmuş değişkenlere erişebilir. Örneğin:

let kullaniciAdi = 'Adem';

function mesajGoster() {
    let mesaj = 'Hello, ' + kullaniciAdi;
    alert(mesaj);
}

mesajGoster(); // Merhaba, Adem

//Fonksiyon dışarıda bulunan değişkenlere tam kontrol sağlar. Hatta modifiye edebilir.

let kullaniciAdii = 'Adem';

function mesajGoster() {
    kullaniciAdi = "Yusuf"; // (1) dışarıda bulunan değişkenin değeri değişti.

    let mesaj = 'Merhaba, ' + kullaniciAdi;
    alert(mesaj);
}

alert(kullaniciAdi); // Fonksiyon çağırılmadan  Adem

mesajGoster();

alert(kullaniciAdi); // fonksiyon çağırıldıktan sonra Yusuf,

//Parametreler
/*arametrelere isteğe bağlı olarak veri paslanabilir. Bunlara fonksiyon argümanları da denir.

Aşağıdaki fonksiyon iki tane parametreye sahiptir. gonderen ve metin*/

/*function mesajGoster(gonderen, metin) { // argümanlar: gonderen, metin
    alert(gonderen + ': ' + metin);
}

mesajGoster('Ahmet', 'Merhaba!'); // Ahmet: Merhaba! (*)
mesajGoster('Mehmet', "Naber?"); // Mehmet: Naber? (**)

/*
Eğer fonksiyonlar (*) ve (**) deki gibi yazılırsa doğrudan fonksiyonda gonderen ve metin yerel değişkenlerine atanırlar. Sonrasında fonksiyon bunları kullanabilir.

Aşağıda gonderen değişkeni fonksiyona paslanmakta. Dikkat ederseniz fonksiyon içerisinde gonderen değişse bile bu dışarıda bulunan değişkeni etkilememekte. Çünkü fonksiyon bu değişkenin her zaman kopyasını kullanır:

*/
/*function mesajGoster(gonderen, metin) {

    gonderen = '*' + gonderen + '*'; // "gonderen" biraz daha güzel hale getirildi.

    alert(gonderen + ': ' + metin);
}

let gonderen = "Mahmut";

mesajGoster(gonderen, "Merhaba"); // *Mahmut*: Merhaba

// "gonderen" değişkeninin değeri sadece fonksiyon içerisinde değişti. Çünkü bu değişken paslandığında fonksiyon yerel bir kopyası üzerinde çalışır
//alert(gonderen); 
*/
//anonymous fuction
const sayHello = function (name) {
    return `Hello ${name}`

}
console.log(sayHello('meryem'));

//Self ınvoking functions

(function () {
    console.log('he yo!')
})()

//Arrow fucnction 

//normal fonksiyon (regular funciton)
//function hello(name, surname)
const toplama = (num1, ...numbers) => {
    console.log(numbers)
    console.log(num1)

    //arguments
    //return `hello ${name}`
}
toplama(2, 5, 7, 8, 10)
// ok fonksiyonu (array fuction)

//const hello2 = (name, surname) => `hello ${name} ${surname}`
//console.log(hello2('ahmet', 'altan'))

//varsayılan değer atama :

function multiply(num1, num2 = '3') {
    return num1 * num2
}
console.log(multiply(10))
console.log(multiply(15, 5))


