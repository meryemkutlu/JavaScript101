/*let fullName

try {
    let firstName = 'meryem'
    let lastName = 'kutlu'
    fullName = firstName + ' ' + lastName   // surname
throw new Error('bir hata var ! ')
} catch (e) {
    // console.log('bir hata var ! ');
    console.log(e.name);
    console.table(e);

}
console.log(fullName)
*/

let age = prompt ('kac yasindasin?')

try {
    if (age > 29) throw new Error('yalan soyluyorsun!')

} catch (e) {
    alert(e.message)
}
