const numberse = [10, 12, 14]
const [number1, number2, number4] = numberse

console.log(numberse[0])




//-----------

const stack = [
    ['HTML', 'CSS', 'JAVASCRIPT'],
    ['PHP', 'MYSQL', 'NODEJS']
]
const [[firstLanguge], frontend, backend] = stack
console.log(frontend);
// console.log(firstLanguge);

// -----------------

// bir degeri es gecmek icin ',' kullaniyoruz.

const numberss = [10, 12, 14]
// const [, , number3] = numbers
// console.log(number3)

// -------------

// undefined degere varsayilan deger atayabilirsin.atayabilirsin


const numbersing = [10, undefined, 14]
const [number5,
    number6 = 3,
    number8
] = numbersing

console.log(number8)

// -----------


const users = ['tayfun', 'mehmet', 'emre', 'meryem', 'gokhan', 'selim']

const [myName, myWifeName, myFriendName, ...otherNames] = users

console.log(myName);
console.log(myWifeName);
console.log(myFriendName);
console.log(otherNames); //kalanlarin tamamini bir dizi olarak ver. ['meryem', 'gokhan', 'selim']

//-----------------


const countries = [
    ['Finland', 'Helsinki'],
    ['Swoden', 'Stockholm'],
    ['Norway', 'Oslo']
]

for (const [country, copital] of countries) {
    console.log(`ulke:${country} - Baskent: ${copital}`);
} //ulke:Finland - Baskent: Helsinki

// ------------


const user = {
    name: 'meryem',
    surname: "kutlu",
    age: 23,
    // adana: 'guzel bir ildir ',
    pets: {
        cats: ['minerva', 'mirmir', 'fistik']
    }
}
const { surname: soyad, adana = 'ADANA' } = user
console.log(adana);

// ----------------

// function multiply(num1, num2) {
//     return num1 * num2
// }
// // console.log(multiply(10, 10));
// function multiply(numbersv //[number1, number2]) {
//     // return numbersv[0] * numbersv[1] //number1 * number2 

// }

// const numbersv = [10, 10]

// console.log(multiply(numbersv))
