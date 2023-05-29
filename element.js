// attributes ,zelligi elemana ait nitelikleri dondurur . donen deger bir dizi degill NamedNodeMap objesidir .bu yuzden dizi methodlari kullanilmaz , donen degerlerin isimleri tarayicidan tarayiciya farklilik gosterebilir.

// const h1 = document.querySelector('h1')

// for (const attr of h1.attributes){
//     console.log(attr.name, attr.value)
// }

// // childElementCount elemanin kac cocuk ogesi oldugunu dondurur.


// const ul = document.querySelector('ul')

// console.log(ul.childElementCount);

// const ul = document.querySelector('ul')
// const deleteButtons = document.querySelectorAll('.delete-btn')

// deleteButtons.forEach(btn => {
//     btn.addEventListener('click', e => {
//         e.target.remove()
//         if (ul.childElementCount === 0){
//             ul.innerHTML = 'Gosterilecek veri bulunamadi!'
//         }
//         // console.log(ul.childElementCount);
//     } )
// })

// console.log(ul.childElementCount);

 

// -----children-----
const ul = document.querySelector('ul')
const deleteButtons = ul.children;

console.log(deleteButtons);

[...deleteButtons].forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.remove()
        if (ul.childElementCount === 0){
            ul.innerHTML = 'Gosterilecek veri bulunamadi!'
        }
        // console.log(ul.childElementCount);
    } )
})

console.log(ul.childElementCount);


// --------------

const deneme = document.querySelector('.deneme')

console.log(deneme.clientHeight); //elemanin genisligini ve yuksekligini alabilmek icin clientHeight ve clientWidth kullanabilirsin .


// firstElementChild ve lastElementChild  ilk ve son elemani secmemizi sagliyor .


console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// nextElementSibling= secilem elemanin hemen sonrasida gelen elemani dondurur. ve previousElementSibling  = secilen elemenin hemen oncesinden gelen elemani dondurur .

const title = document.querySelector('.title')
console.log(title.nextElementSibling.previousElementSibling);
console.log(title.previousElementSibling.previousElementSibling);


// scrollHeight= elemanin tasan alanlarida dahil olmak uzere yuksekligi donduruyor. ve scrollWidth = elemanin tasan alanlarida dahil olmak uzere genislini donduruyor.

// const scrollContent = document.querySelector('.scroll-content')

console.log(
    // scrollContent.scrollHeight
    // scrollContent.scrollWidth
);


//scrollLeft = scroll olan elemanin soldan mesafesini dondurur.ayrica soldan mesafesini ayarlamak icinde ayni ozellik kullanilir.
//scrollTop = scroll olan elemanin  yukaridan mesafesini dondurur. yukari mesafesini ayarlamak icin de ayni ozellik kulllanilir.

 const scrollContent =document.querySelector('.scroll-content')
 const scrollDownBtn = document.getElementById('scroll-down')

 scrollDownBtn.addEventListener('click', () => {
    scrollContent.scrollTop += 50
 })

 //after() ve before() = secilen elemanin oncesine ve sonrasina oge eklemek icin kullanilir.

 const izmit = document.getElementById('izmit')
 const h1 = document.createElement('h1')
 h1.textContent = 'baslik'

 izmit.before(h1)


 //closest() = secilen elemana en yakin ogeyi dondurur. 
   
 //hasAttribute()= secilen elemana ait belirlenen niteligin olup olmadigini kontrol eder.

 const aElements = document.querySelectorAll ('a')

  aElements.forEach(a => {
    if (
        a.hasAttribute('title')) {
            a.style.backgroundColor = 'yellow'
        }
  })

  //hasAttributes()= secilen elemana ait harhangi bir nitelik olup olmadigini kontrol eder . 


  //matched()= secilen elemanin belirtilen css secicisiyle eslesip eslesmedigini kontrol eder.

  //toggleAttribute()= secilen elemana belirtilen nitelik varsa kaldirilmasini yoksa eklenmesini saglar .
  