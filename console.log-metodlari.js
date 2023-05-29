console.log('merhaba');
console.log(['meryem','kutlu','fistik'])
console.log({name:'meryem',surname:'kutlu',age:'23'});
let age = 23 
console.log('ben %d yasindayim ve %d yilinda dogdum',age, 1999);
console.log('%cdur! Naber',  'font-size:50px; font-family:arial ; color:red ;');

console.warn('uyari mesaji');
console.error('hata mesaji!')

let names = ['meryem','emre','mirmir','minerva','fistik']
console.table(names)

console.table({
    name:'meryem',
    surname:'kutlu'
})

console.time('calculate 1m array')
new Array(10e5).fill('abc').map((value,index)=> index )
console.timeEnd('calculate 1m array')

let a = 5 
let b = 6
console.assert(a > b, 'a beden buyuk degil ! ')  //true oldugu zaman hic bir sey yazdirmaz .

// const users = [
//     {
//         name:'meryem',
//         surname:'kutlu',
//         age:'23'
//     },
//     {
//         name:'melike',
//         surname:'minerva',
//         age:'20'
//     },
//     {
//         name:'akif emre',
//         surname:'senol',
//         age:'24'
//     }
// ]
// console.group('names')
// console.log(names)
// console.groupEnd

// console.group('users')
// console.log(users)
// console.groupEnd

const func = () => {
    console.count('kac kere cagirildi?')

}

func()
func()
func()

// console.clear() // console temizler .
