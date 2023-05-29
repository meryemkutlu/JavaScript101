// set sadece benzersiz elemanları içerebilir

const names = new Set()
console.log(names);

const array = new Set(['meri', 'emre'])
array.delete('tayfun')//siliyor.
array.add('tayfun')//yeni eleman eklemek için ad kullanılıyor.
//console.log(array.size); //set ile array oluşturma .
//length yerine size kullanılıyor
// settin içinde elemanın olup olmadığını kontrol etmek için 'has' kullanılıyor
console.log(array.has('meri')); //true var 

array.clear() //tüm elemanları siliyor 

const languges = [
    'Englis',
    'finnish',
    'french'

]
const langSet = new Set(languges)
console.log(langSet);
console.log(langSet.size);


const a = [1, 2, 3, 4, 5]
const b = [3, 4, 5, 6]

//let B = new Set(b)
//console.log(a.filter(num => !B.has(num)))//ayni olmayan elemanlari  gosteriyor.

/*const B = new Set(b)
console.log(
    a.filter(num => B.has(num))
);aynı olan elemanları getiriyor .*/




/*const c = [...a, ...b]
console.log(c);  //benzersiz hale getirme .
console.log(new Set(c));*/


//Map 
// Map anahtar ve değer ikilisini tutan ve değerlerin eklenme sırasını hatırlayan bir JavaScript nesnesidir. Normal bir nesneden farklı olarak anahtar için herhangi bir veri tipi kullanılabilir. String ile sınırlı değildir.
/*
new Map
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
map/clear()
map.size

*/

// const map = new Map()
// map.set('name', 'emre')
// map.set(1, 'meryem')
// console.log(map.get(1));//(map.size)length


const tayfun = {
    name: 'tayfun',
    surname: 'erbilen'
}
const ahmet = {
    name: 'ahmet'
}

const m = [
    ['name', 'tayfun'],
    ['surname', 'erbilen'] //1.yol
]
console.log(Object.fromEntries(m));


// const map = new Map(Object.entries(tayfun))
// console.log(map); 2.yol


// const map = new Map()
// map.set(tayfun, 10)
// map.set(ahmet, 20)
// tayfun.surname = 'erbilen';
// console.log(map.get(tayfun));
// console.log(
//     map.keys()
// );

/* for (let u of map.keys()) {
    console.log(u); //tayfun //ahmet
} */
// for (let u of map.values()) {
//     console.log(u);
// }
//Iteration over Map

// map.keys
// map.values
// map.entries


// [...map.keys()].forEach(v => console / console.log(v))

