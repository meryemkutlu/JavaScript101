// let title

// for(let i = 0; i < 3; i++){
//     title = document.createElement('h1')
//     title.className = 'title'
//     title.style.fontSize = '24px'
//     title.textContent = i
//     //console.log(title);
// } 
    

for(let i = 1; i < 10; i++) {
    let h1 = document.createElement('h1')
    h1.className = 'test'
    h1.style.backgroundColor = 'blue'
    h1.textContent = ' bu javascript ile eklendi' + i
 document.body.appendChild(h1)
}

const allH1Elements = document.querySelectorAll('h1')

for(const h1 of allH1Elements) {
    // console.log(h1);
    h1.remove() //silmek icin 
}