(function(){

/*querys*/

const flippingContainer = document.querySelector('#flippingContainer')
const profilePicContainer = document.querySelector("#profilePicContainer")


/*coin animation active*/
flippingContainer.addEventListener('mouseenter',()=>{
    profilePicContainer.classList.add("active")
   
})
flippingContainer.addEventListener('mouseleave',()=>{
    profilePicContainer.classList.remove("active")
    
})

/* canvas curve text*/

// const canvas = document.querySelector("#canvas")
// let context = canvas.getContext("2d");
  
// context.font = "15px dancin-script";
// context.fillStyle = "white";
// context.textAlign = "center";

// let string = "Click Me!";

// let angle = Math.PI * -0.03; // in radians
// let radius = 178;


// context.translate(160,-35);
// context.rotate(-1 * angle * 2);

// for (let i = 0; i < string.length; i++) {

//     context.rotate(angle );
//     context.save();
//     context.translate(0, 1 * radius);
//     context.fillText(string[i], 0, 0);
//     context.restore();
// }

})()