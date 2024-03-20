
window.addEventListener("scroll", function(){
    let reader = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})