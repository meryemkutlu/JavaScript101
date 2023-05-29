// Promise , fetch, async/await konulari 
//Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. Promise nesnesi (Resolve (islem basarili))ve (Reject(islem basarisiz  )) adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir.
//panding durumu bekleme . Aygıt bildirim alıncaya kadar bekleme (pending)
//Söz ne yerine getirilmiş, ne de reddedilmiştir. (fulfilled), başarıyla tamamlandığını temsil eder. 

// (fulfilled then()) , (rejectd (catch)) deger alabilmek icin .

/*const test = callback =>  {
    setTimeout(() => {
        callback('hata olustu!',[])
    },2000)
  
}

const callback = (err,data) => {
    if(err) {
        console.log('hata',err);
    }else{
        console.log('data',data);
    }
}
test(callback)*/

// const Promise = new Promise(( Resolve, Reject) => {
//     setTimeout(() => {
//         Reject('islem basarili')
//     },1500)
// })
// Promise.then((data) => {
//     console.log(data)
// }).cath(err => {
//   console.warn(err);
// })

//bir functionun basina (async) koyarsaniz Promise donusuyor .
// const square = async function (n) {
//     return n * n
// }
// square(2)
// //Promise {<resolved>: 4}

// const square = async function (n) {
//     return n * n 
// }
// const value = await square(2)
// console.log(value); //2



//======CLOSURE =====
/*“Closure bir fonksiyonun, başka bir lexical scope tarafından çağırılsa bile kendi lexical scope’unu hatırlamasıdır.”

Başka bir değişle; bir fonksiyon kendi kapsamı dışındaki bir değişkeni kullanıyorsa ve bu fonksiyon başka bir kapsamdan çalıştırılsa bile o değişkene hala erişimi vardır.

Bu tanımı bilmeden bile muhtemelen yazdığınız kodlarda closure kullanmışsınızdır.*/

function basla() {
    var sayi = 0;
    
    setTimeout(function(){
      console.log(sayi++);
        setTimeout(function(){
        console.log(sayi++);
          setTimeout(function(){
            console.log(sayi++);
          
          },100); 
        },200); 
    },300); 
    
  }
  basla(); // 0 1 2