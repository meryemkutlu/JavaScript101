// JSON nedir?
// JSON JavaScript Object Notation (JavaScript Nesne Gösterimi) kısaltmasıdır.

// JSON, verileri depolamak ve farklı platformlar arasında taşıma için kullanılan bir yapıdır.

// JSON, JavaScript nesne gösterim biçiminde yazılmış metinlerdir.
//{"FirstName": "Liza", "lastName": "Bon", "age": 35, "e-posta": "lizabon@example.com"}





// " " ve String olmali

// [
//     { "name": "meri"
//olabilir
//     }
// ]

let categories = [
    {
        name: 'css',
        count: 5
    },
    {
        name: 'html',
        count: 16
    }
]
let categoriesJSON = JSON.stringify(categories)

console.log(categoriesJSON)

// ObjectDEN JSONA Geolocation GECIRIRKEN JSON.parse() kullaniliyor.
// JSONdan Objecte gecerken JSON.stringify() kullaniliyor.

('KEY','key')
('VALUE','value') //olarak da kullaniliyor 