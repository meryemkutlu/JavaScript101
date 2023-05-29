//Scope
// var,let,const
// window,global,local

//var,let,constla bir değişken tanımlamadıysan o window  olur .
ad = 'tayfun'
ad
'tayfun'
window.ad
'tayfun'

//global her yerden erişebiliriz.

let name = 'tayfun'
let surname = 'erbilen'

function letsLearnScope() {
    console.log(name, surname);
    if (true) {
        let name = 'meryem'
        let surname = 'kutlu'
        console.log(name, surname);
    }
    console.log(name, surname);
}
letsLearnScope()
console.log(name, surname);

//local scope : belli bir kapsam çerçevesinde erişebilen

{
    let deneme = 'text'
    console.log(deneme); //bolck
}

//Object (nesne)
/*
nesne oluşturmak için { } süslü parantezler kullanılır.
const arac={ };
const ogrenci={ };
 
const arac={
    marka:"Renault",
    model:"Clio",
    yil:2018,
    renk:"Beyaz",
    yakit:"Dizel",
    saatUcreti:60
};*/

const person = {}
console.log(person) //boş obje

//console.log(user[keyName]yada user.name)
/*getFullName: function() {
    return `${this.name} ${this.surname}`
}*/

