
var bouton = document.getElementById('burger')
console.log(bouton)
bouton.addEventListener('click',function(){
    var menu = document.querySelector('nav')
    console.log(menu)
    menu.classList.toggle('hide')
})
