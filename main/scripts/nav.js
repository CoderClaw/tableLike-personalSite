(function(){

//all querys

const mainNavLi = document.querySelectorAll('.main_nav_li')
const home = document.querySelector("#li_home")
const about = document.querySelector("#li_about")
const portfolio = document.querySelector("#li_portfolio")
const contact = document.querySelector("#li_contact")

window.onscroll = function() {
    let y = window.scrollY;
    let percentY = parseInt((y*100)/window.innerHeight)
    if(percentY <= 99){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        home.classList.add('active')
    }
    if(percentY > 0 && percentY <= 110){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        about.classList.add('active')
    }
    if(percentY > 110 && percentY <= 198){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        portfolio.classList.add('active')
    }
    if(percentY >=250){
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        contact.classList.add('active')
    }
  };
//main nav menu selector

mainNavLi.forEach(el=>{
    el.addEventListener('click',(ev)=>{
        handleClick(ev)
        mainNavLi.forEach(item=>{
            item.classList.remove('active')
        })
        el.classList.toggle('active')
    })
})

function handleClick(ev){
    switch(ev.target.id){
        case "buttonHome":
            window.scrollTo(0,0)
            return
        case "buttonAbout":
            window.scrollTo(0,(100*window.innerHeight)/100)
            return
        case "buttonPortfolio":
            window.scrollTo(0,(200*window.innerHeight)/100)
            return
        case "buttonContact":
            window.scrollTo(0,(300*window.innerHeight)/100)
            return
        default:
            window.scrollTo(0,0)
            return
    }
}


})()