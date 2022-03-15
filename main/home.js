(function(){

/*querys*/

const flippingContainer = document.querySelector('#flippingContainer')
const profilePicContainer = document.querySelector("#profilePicContainer")


flippingContainer.addEventListener('mouseenter',()=>{
    profilePicContainer.classList.add("active")
   
})
flippingContainer.addEventListener('mouseleave',()=>{
    profilePicContainer.classList.remove("active")
    
})

})()