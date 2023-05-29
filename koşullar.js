// // koşullar bu şekilde uygulanabilir
// // *if
// // *if else
// // *if else if else 
// // *switch (alternetif koşul)
// Birden fazla değeri karşılaştırmak için switch case yapısı kullanılabilir.
//     switch(ifade) {
//     case a:
//         // a kod bloğu
//         break;(break : koşul çalışmışsa diğer koşullara baktırmıyor)
//     case b:
//         // b kod bloğu
//         break;
//     default: (default : diğer koşullar çalışmazsa en son default çalışacaktır .)
//     // varsayılan kod bloğu
// }
// switch ifade alanına yazılan değer ile case değerlerini sırayla karşılaştırır.

// Karşılaştırma sonucunda eşleşme sağlanırsa eşleşen kod bloğundaki komutlar çalıştırılır.

// // *ternary operatoe  (başka bir alternetif)

// // if :

// //     if bloğu ile tanımladığımız koşul eğer doğru yani true bilgi üretiyorsa if bloğu kapsamındaki kodlar işletilir eğer false üretirse işletilmez.

// //         if(koşul) {
// //     //  koşul true ürettiğinde çalışacak kodlar burada tanımlanır.
// // }

// //Örnek

// // var saat = 10;

// // if (saat < 11) {
// //     console.log("günaydın");
// // }


// // else:

// // if bloğunun true değer üretmediği durumda da bazı kodları çalıştırmak isteyebiliriz bu durumda else bloğunu kullanmalıyız.

// //     if(koşul) {
// //     //  koşul true ürettiğinde çalışacak kodlar burada tanımlanır.
// // } else {
// //     //  koşul false ürettiğinde çalışacak kodlar burada tanımlanır.
// // }


// //Örnek

// // var saat = 13;

// // if (saat < 11) {
// //     console.log("günaydın");
// // } else {
// //     console.log("iyi günler")
// // }

// // else if :

// // Bazen de bir koşula bağlı olarak farklı farklı koşullar üretmek isteyebiliriz.Bu durumda else -if bloğunu kullanarak ekstra sorular sorma imkanına sahip oluruz.

// //     if(kosul1) {
// //     //  koşul 1 true ürettiğinde çalışır.
// // } else if (kosul2) {
// //     // kosul1 false olduğunda koşul2 ' e bakılır. koşul2 true ise çalışır.
// // } else {
// //     //  koşul1 ve koşul2 false ürettiğinde çalışır.
// // }

// // Örnek

// // var saat = 10;

// // if (saat < 11) {
// //     console.log("günaydın");
// // } else if (saat < 18) {
// //     console.log("iyi günler.");
// // } else {
// //     console.log("iyi akşamlar.");
// // }
// /*İki koşulun gerçekleşmediği durumlarda ise else bloğu çalışır.
 
// ** else if bloğunu aşağıya doğru arttırabiliriz.*/


// let result = prompt('2 + 5 kaç ', '2 + 5')
// if (result === '7') {
//     console.log('Doğru cevabı verdin')
// } else {
//     console.log('Hatalı cevap verdin, dpğru cevap 7 olmalıydı!');
// }