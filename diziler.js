// // // // Array :
// // // Birden fazla verinin saklanması için oluşturulan değişkenlere dizi adı verilir. Dizilerin oluşturulmasındaki temel düşünce birden fazla veriye tek bir değişken altından erişebilmektir.
// // Array nedir ne işe yarar ?
// //     Array, aynı tipten çok sayıda değişken tanımlamak için kullanılır.Soyut bir veri yapısıdır.Matematikteki sonlu dizi kavramına benzer.

// // const kullanılır genel de 

// // Örnek:

// let names = Array()
// console.log(names)   // boş bir array 

// const x = [
//     1,
//     2,
//     3,
//     4,
//     5
// ]
// console.log(x);
// console.log('meryem'.split(''))

// let names2 = ['meryem', 24, 1999, 'kutlu']
// names2[0] = 'Nur';
// console.log(names2);



// /*Dizi metodlarının kısa açıklamaları:

// Eleman ekleme/silme metodları:

// push(...items) – elemanları sona ekler,
// pop() – en sondaki elemanı alır,
// shift() – başlangıçtan eleman alır,
// unshift(...items) – başlangıça eleman ekler
// splice(pos, deleteCount, ...items) – pos indeksinde deleteCount sayısı kadar elemanı siler ve bunları items'a ekler.
// slice(start, end) – start ile end pozisyonları arasındaki (end dahil değil) elemanları yeni bir diziye kopyalar.
// concat(...items) – yeni bir dizi döndürür: var olan dizideki tüm elemanları kopyalar ve items'ı ekler. Eğer items dizi ise bunun elemanları da alınır. arrayleri birleştirmek istersek concat methodu kullanıyoruz.
// Elemanları aramaya yönelik metodlar:

// indexOf/lastIndexOf(item, pos) – pos'tan başlayarak item'ı arar. Bulursa indeksini döndürür, bulamaz ise -1 döndürür.
// includes(value) – eğer dizi value'ya sahipse true döndürür. Diğer türlü false döndürür.
// find/filter(func) – Elemanları fonksiyonlar ile filtreler. Buna göre fonksiyonu true yapan ilk veya tamamını döner.
// findIndex aynı find gibidir fakat bir değer yerine index döner.
// Diziler üzerinde dönüşümler:

// map(func) – her eleman için func çağrılır ve bunların sonuçlarından bir dizi üretilerek döndürülür.
// sort(func) – diziyi olduğu yerde sıralar ve döndürür.
// reverse() – diziyi terse çevirir ve döndürür.
// split/join – karakterleri diziye çevirir veya dizileri karaktere çevirir.
// reduce(func, initial) – dizide bulunan elemanlar sıra ile func fonksiyonu üzerinden hesaplanır ve son değer döndürülür.
// Elemanlar üzerinden dönme:

// forEach(func) – dizide bulunan her eleman için func çağrılır. hiçbir şey döndürmez.
// Ek olarak:

// Array.isArray(arr) arr'in dizi olup olmadığını kontrol eder.*/


// //ör:

// // let names3 = Array(3).fill('<div>loader</div>')
// // console.log(names3);


// // let array1 = [1, 2, 3]
// // let array2 = [4, 5, 6]
// // let result = array1.concat(array2)
// // console.log(result)

// let names4 = ['tayfun', 'mehmet', 'emre'] // 'tayfun'
// // console.log(names4.indexOf('mehmet'))
// // LastIndexOf(iki kere geçtiğini söylüyor)
// // inculudes(var olup olmadığına bakıyor fakat true false olarak cevap veriyor.)
// //console.log(names4.toString());
// //console.log(names4.join(''));
// // console.log(names4.slice(1, 3)); //mehmet ve emre sonuçlarını alır 
// console.log(names4.splice(0, 1)); // diziden çıkartma 


//EXERCİSE

let name = []
console.log(name);


const name1 = ['meryem',
    'emre',
    'elif',
    'melike',
    ' fıstık'
]


console.log(name1.length);

console.log(name1.slice(0, 4));

console.log(name1.reverse(0, 3))

console.log(name1.join('-'));

