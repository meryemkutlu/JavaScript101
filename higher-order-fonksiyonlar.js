// parametre olarak geçilen fonksiyonlara (collback ) denir

const fonksiyon = number => number ** 4

function cube(cb, number) {
    return cb(number) * number
}

console.log(cube(fonksiyon, 2));

//returning function / fonksiyon geriye döndürmek

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}
//console.log(a(10)(10)(20))

// const numbers = [1, 3, 5, 7, 9]
// let total = 0
// numbers.forEach(number => total += number)
// console.log(total)

//zaman ayarlı işlemler 

setInterval // zaman ayarlı 5 saniyede  bir çalışmalı 
setTimeout // tek seferlik  5 dk sonra 


function sayHello() {
    console.log('hello!')
}
const interval = setInterval(sayHello, 1000)

// function sayHello() {
//     console.log('hello!')
// }
// setTimeout(sayHello, 3000)

//clearInterval
//clearTimeout

setTimeout(() => {
    clearInterval(interval)
    console.log('interval işlemi iptal edildi ')
}, 5000)

//fonksiyonel programlama
/*
forEach ,map, filter, reduce, find, every, some, sort.

forEach */

// const numbers = [1, 3, 5, 7, 9]

// numbers.reduce((oldValue, currentValue) => {
//     return oldValue + currentValue
// }, 0)
//let total = 0
//let calculate = (number, index) => total += (number + index)
//numbers.forEach(calculate)
//console.log(total)

//map

// const number2 = numbers.map(number => number * 2)
// console.log(number2)

// //filter

// let users = [
//     {
//         Id: 1,
//         name: 'tayfun',
//         age: 29,
//         gender: 1

//     },
//     {
//         Id: 2,
//         name: 'mehmet',
//         age: 24,
//         gender: 1

//     },
//     {
//         Id: 3,
//         name: 'mert',
//         age: 29,
//         gender: 1

//     },
//     {
//         Id: 4,
//         name: 'meri',
//         age: 21,
//         gender: 2

//     }


// ]

// users = users.map(user => {
//     if (user.Id === 2) {
//         user.name = 'hakan'
//     }
//     return user
// })
// console.log(users)

// // console.log(
// //     numbers.filter(number => number > 3 && number < 9)
// // );

// const women = users.filter(user => user.gender === 2)
// const men = users.filter(user => user.gender === 1 && user.age > 24)
// console.log(men)


//reduce

const numbers = [1, 3, 5, 7, 9]

numbers.reduce((oldValue, currentValue) => {
    return oldValue + currentValue
}, 0)

// every

// const names = ['meryem', 'mehmet', 'ali', 'akif', 'emre']
// const areAllStr = names.every((name) => typeof name === 'string')// string mi true or false // true
// console.log(areAllStr)

//some


const names = ['ahmet', 'mehmet', 'ali', 'akif',]
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue) //true

//find


const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age) //18

//findIndex : elemanın kendisnini döndürmek yerine index değerini döndürüyor.

//sort method sıralamaya yarıyor  stringler de sıkıntı yok numberler de düzgün çalışmışyor .
numaralar.sort((a, b) => a - b) // olunca düzgün çalışıyor 

