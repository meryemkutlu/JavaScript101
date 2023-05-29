//Boolean

/*let isLightOn = true
let isRaining = false
let truValue = 4 > 3 // true
let falseValue = 4 < 3 // false */

// doğru değerler :(Truthy values)
//  0 hariç tüm sayılar  
//  ('') boş Stringler haiç hepsi doğru değer kabul ediliyor .
// boolean true .

// --------------------
// falsy values 
// 0 
// 0n 
// null
// undefined
// NaN
// boolean false
//  "",'', ``, boş Stringler 
//--------------------------

// Operators:
// = işareti atama Operatoru demektir. 
// let a = 4
// let b = 10 
// a += b  sonuç 14 
// tek = atama yaparken 
// x = = y (x değerinin y değerin eşit olup olmadığını soruyor)
// = = = hem değerinin hem de veri türünün aynı olup olmadığına bakıyor 
// != eşit değil mi ? / eşit değildir denek değildir 
// > büyüktür 
// < küçüktür 
// >= <= küçük, büyük eşitse 

/*&& ve operatörü
|| pipe (ya da )  operatör true || true -> true  ör / ışık açık mı? || fiş takılı mı ? ikisi de true olamlı yada false
let isLightOn = !isLightOn // false  olumsuz değere döndürüyor 
let  isMarried = !false // true 

1.pre-increment 
let count = 0 
console.log (++count) // 1
console.log (count) // 1 




1.post-increment 
let count = 0
console.log(count++);  // 0
console.log(count);  // -1 


1.pre-decrement 
 
let count = 0
console.log(count--);  // 0
console.log(count);  // 1 

let count = 0 
console.log (--count) // -1
console.log (count) // -1 

Ternary  operatörü (3lü operatörü)

 5 > 4 ? 'evet 5 büyüktür dörtten' : 'hayır küçük'
 // evet 5 büyüktür dörtten 
------------------------------------------------------------
let result = 5 > 4 ? 'evet 5 büyüktür dörtten' : 'hayır küçük'
result
'evet 5 büyüktür dörtten'


opertör önceliği :

((5 + 3 ) / 5 ) * 2-5  
parantezler öncelik 

*/


/*Window methodları 


alert(mesaj)
alert('welcome')
prompt ('bir yazı girin') 

let sayi = prompt (' Bir sayı girin ', '5')
let result = sayi * 2 
console.log (result)


confirm('emin misin ?')  ( onay kutusu)
*/

/*Date Object 
 bilgi verilen get ile başlanıyor


 */
const date = new Date()
console.log(date)

date.getFullYear()