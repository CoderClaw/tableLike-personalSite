(function(){

//all querys

const mainNavLi = document.querySelectorAll('.main_nav_li')

//main nav menu selector

mainNavLi.forEach(el=>{
    el.addEventListener('click',()=>{
        console.log('click on nav menu')
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        el.classList.toggle('active')
    })
})




})()