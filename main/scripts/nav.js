(function(){

//all querys

const mainNavLi = document.querySelectorAll('.main_nav_li')
const home = document.querySelector("#li_home")
const about = document.querySelector("#li_about")
const portfolio = document.querySelector("#li_portfolio")
const contact = document.querySelector("#li_contact")

window.onscroll = function() {
    let y = window.scrollY;
    let percentY = Math.floor((y*100)/window.innerHeight)
    if(percentY <= 99){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        home.classList.add('active')
    }
    if(percentY > 70 && percentY <= 170){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        about.classList.add('active')
    }
    if(percentY > 171 && percentY <= 340){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        portfolio.classList.add('active')
    }
    if(percentY > 343){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        contact.classList.add('active')
    }
  };
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