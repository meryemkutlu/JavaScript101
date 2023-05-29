/*for döngüsü:
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

for (let i = 60; i <= 100; i++) {
    //console.log('i', i)
    console.log(`${i}*${i} = ${i * i}`); //çarpma işlemi yapar
}

const names = ['tayfun', 'mehmet ', 'emre', 'mert', 'meryem']

// for (let i = 0; i <= 4; i++) {
//     console.log(names[i]);
// }

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

let numbers = [5, 10, 15]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]

}
console.log('toplam', sum) //toplam 30
*/
/*while loop
ve
do while loop

let i = 7 //0
while (i < names.length) {
    console.log('isim ', names[i])
    i++
}

do {
    console.log('isim', names[i])
    i++
} while (i < names.length) // ilk sefer deçalışır çalışmasa bile kod

*/

/*for of loop
diziler için for of döngüsünü kullanıyoruz



for (let name of names) {
    console.log('ad', name)
}
*/

/*break

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
    }
    console.log(`${i} `); // 0,1,2

}

for (let name of names) {
    if (name === 'meryem') {
        console.log(`${i} bulundu.`)
        break //aradığın bir ifadeyi bulmak için kullanılıyor
    }
    console.log('Ad', name)
}
*/

//continue (es geçmek)


const names = ['tayfun', 'emre', 'mert', 'meryem']

for (let name of names) {
    if (name === 'meryem') {
        console.log(`${name} es geçildi.`)
        continue //aradığın bir ifadeyi bulmak için kullanılıyor
    }
    console.log('Ad', name)
}