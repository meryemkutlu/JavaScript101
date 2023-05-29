//  const button = document.getElementById('btn')

//  button.addEventListener('click', function(e) {
//  console.log('butona tikladin');
//  })

//  button.addEventListener('event',e = {

//  })

// function clickHandle(e) {
//     console.log(e);
// }


// const button = document.getElementById('btn')
// button.onclick = e => {
//     console.log(e);
// }

// const img = document.querySelector('img')
// img.style.opacity = 0
// img.addEventListener('load',function(e) {
//     console.log('gorsel yuklendi');
//     img.style.opacity = 1 
// })
 
// img.addEventListener('error',function(e) {
//     e.target.src = './resim-yok.jpg'
// })



const input = document.getElementById('name')
input.addEventListener('input' , e => {
    console.log('birseyler yaziliyor..', e.target.value);
})


const colorInput = document.getElementById('color-picker')
colorInput.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value
})


const genderSelect = document.getElementById('gender')
genderSelect.addEventListener('change',e => {
    console.log(
        [...e.target.selectedOptions].map(el => el.value)
    );
});

const saveButton = document.getElementById('save-btn')
saveButton.addEventListener('click', e => {
    console.log(
        input.value,
        colorInput.value 
         );
});
