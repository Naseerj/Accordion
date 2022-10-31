let lorem = Array.from(document.querySelectorAll('.lorem'));
let items = document.querySelectorAll('.item')
let plus = document.querySelectorAll('.plus')

console.log(lorem);

items[0].addEventListener('click', () =>{
    lorem[0].classList.contains('active') ?
    lorem[0].classList.remove('active') :
    lorem[0].classList.add('active') ;

    if( lorem[0].classList.contains('active')) {
        lorem[1].classList.remove('active') 
        lorem[2].classList.remove('active') 
    }

    if (plus[0].classList.contains('active')){
        plus[0].classList.remove('active')
    }
    else{
        plus[0].classList.add('active')
        plus[1].classList.remove('active')
        plus[2].classList.remove('active')
    }
})

items[1].addEventListener('click', ()=>{
    lorem[1].classList.contains('active') ?
    lorem[1].classList.remove('active') :
    lorem[1].classList.add('active') ;

    if( lorem[1].classList.contains('active')) {
        lorem[0].classList.remove('active') 
        lorem[2].classList.remove('active') 
    }

    if (plus[1].classList.contains('active')){
        plus[1].classList.remove('active')
    }
    else{
        plus[1].classList.add('active')
        plus[0].classList.remove('active')
        plus[2].classList.remove('active')
    }
})


items[2].addEventListener('click', ()=>{
    lorem[2].classList.contains('active') ?
    lorem[2].classList.remove('active') :
    lorem[2].classList.add('active') ;

    if( lorem[2].classList.contains('active')) {
        lorem[1].classList.remove('active') 
        lorem[0].classList.remove('active') 
    }

    if (plus[2].classList.contains('active')){
        plus[2].classList.remove('active')
    }
    else{
        plus[2].classList.add('active')
        plus[0].classList.remove('active')
        plus[1].classList.remove('active')
    }
})
