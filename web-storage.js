localStorage.setItem('name','meri') //bir kere yazildiginda hep kaliyor cunku application a kayit oluyor key ve value olarak .


console.log( 
    localStorage.getItem('name')//key e erismek icin .
    // localStorage.removeItem('name')//silmek icin .

);

/*veri kaybi yasmadan tutmak 

const names = ['meryem','ahmet','emre']
const user = {
    name:'tayfun',
    surname:'erbilen'
}
localStorage.setItem('user',JSON.stringify(user))
localStorage.setItem('name',JSON.stringify(name))

// console.log(
// typeof localStorage.getItem('user'))

console.log(
    JSON.parse(localStorage.getItem('user')) )
 */