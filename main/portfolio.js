(function(){



    const projects = document.querySelectorAll(".project")
    let zIndex = 5

    projects.forEach(project=>{
        project.addEventListener('click',()=>{
            projects.forEach(el=>{
                if(el.classList[2] === 'forwardsLeft' || el.classList[2] === 'forwardsRight'){
                    zIndex++
                    el.style.zIndex = zIndex
                }
                el.classList.remove('forwardsLeft')
                el.classList.remove('backwardsLeft')
                el.classList.remove('forwardsRight')
                el.classList.remove('backwardsRight')
            })
            
            if(project.classList[1] === "projectOne" || project.classList[1] === "projectThree" || project.classList[1] === "projectFive"){
                project.classList.add('forwardsLeft')
                project.nextElementSibling && project.nextElementSibling.classList.add('backwardsRight')
                project.previousElementSibling && project.previousElementSibling.classList.add('backwardsRight')
            }else{
                project.classList.add('forwardsRight')
                project.nextElementSibling && project.nextElementSibling.classList.add('backwardsLeft')
                project.previousElementSibling && project.previousElementSibling.classList.add('backwardsLeft')
            }
            
        })
    })



})()