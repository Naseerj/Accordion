// let first = document.querySelector('.first')
// let second = document.querySelector('.second')
// let last = document.querySelector('.last')
let lorem = Array.from(document.querySelectorAll('.lorem'))
let items = Array.from( document.querySelectorAll('.item'))

items[0].addEventListener('click', ()=>{
    // if(lorem[0].style.display == 'none'){
    //     lorem[0].style.display = 'block'
    // }else{
    //     lorem[0].style.display = 'none'
    // }
    lorem[0].classList.contains('active')? 
    lorem[0].classList.remove('active') : 
    lorem[0].classList.add('active');
    if(lorem[0].classList.contains('active')) {
        lorem[1].classList.add('active');
        lorem[2].classList.add('active');
    }
})
items[1].addEventListener('click', ()=>{
    // if(lorem[1].style.display == 'none'){
    //     lorem[1].style.display = 'block'
    // }else{
    //     lorem[1].style.display = 'none'
    // }
    lorem[1].classList.contains('active')? lorem[1].classList.remove('active') : lorem[1].classList.add('active');
    if(lorem[1].classList.contains('active')) {
        lorem[0].classList.add('active');
        lorem[2].classList.add('active');
    }
})
items[2].addEventListener('click', ()=>{
    lorem[2].classList.contains('active')? lorem[1].classList.remove('active') : lorem[1].classList.add('active');
    // if(lorem[2].style.display == 'none'){
    //     lorem[2].style.display = 'block'
    // }else{
    //     lorem[2].style.display = 'none'
    // }
    if(lorem[2].classList.contains('active')) {
        lorem[0].classList.add('active');
        lorem[1].classList.add('active');
    }
})


