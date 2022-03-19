(function(){


    const papers = document.querySelectorAll(".paper")

    
    papers.forEach(paper=>{
        paper.addEventListener('click', ()=>{
            
            papers.forEach((el,i)=>{
                el.classList.remove("active")
                el.style.zIndex = 5-i
            })
            paper.classList.add("active")

            paper.nextElementSibling 
            ? paper.nextElementSibling.style.zIndex = 51
            :papers.forEach((el,i)=>{
                el.style.zIndex = 5-i
                console.log(el)
            })
            
            
        })
    })


})()