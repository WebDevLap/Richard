

const burger = document.getElementById('burger1')
const body = document.body
const nav = document.getElementById('nav1')
const headerMenuContainer = document.getElementById('menuContainer1')

document.addEventListener('click', function(event){
    const burgerTarget = event.target.closest('#burger1')
    const menuContainerTarget = event.target.closest('#menuContainer1')
    
    if(!menuContainerTarget){
        burger.classList.remove('active')
        body.classList.remove('lock')
        nav.classList.remove('active') 
        return 
    }
    if(!burgerTarget) return;


    burger.classList.toggle('active')
    body.classList.toggle('lock')
    nav.classList.toggle('active')
})