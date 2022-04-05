(function(){

    

    const projects = document.querySelectorAll(".project")
    let zIndex = 5

    const before = document.querySelector(".project")
    console.log(before)

    projects.forEach(project=>{
        project.addEventListener('click',()=>{
            projects.forEach(el=>{
                if(el.classList[2] === 'forwardsLeft' || el.classList[2] === 'forwardsRight'){
                    zIndex++
                    el.style.zIndex = zIndex
                }
                el.classList.remove('active')
                el.classList.remove('forwardsLeft')
                el.classList.remove('backwardsLeft')
                el.classList.remove('forwardsRight')
                el.classList.remove('backwardsRight')
                removeChilds(el)
            })
            
            if(project.classList[1] === "projectOne" || project.classList[1] === "projectThree" || project.classList[1] === "projectFive"){
                project.classList.add('forwardsLeft')
                project.classList.add('active')
                project.nextElementSibling && project.nextElementSibling.classList.add('backwardsRight')
                project.previousElementSibling && project.previousElementSibling.classList.add('backwardsRight')
                addChilds(project)
            }else{
                project.classList.add('forwardsRight')
                project.classList.add('active')
                project.nextElementSibling && project.nextElementSibling.classList.add('backwardsLeft')
                project.previousElementSibling && project.previousElementSibling.classList.add('backwardsLeft')
                addChilds(project)
            }
            
        })
    })


    function addChilds(project){
        const git = document.createElement("div")
        git.innerHTML = "GIT"
        git.classList.add("projectChild")
        git.classList.add("git")
        project.appendChild(git)
        const live = document.createElement("div")
        live.innerHTML = "LIVE"
        live.classList.add("projectChild")
        live.classList.add("live")
        project.appendChild(live)
    }
    function removeChilds(project){
       if(project.children[1]){
        project.removeChild(project.children[1])
        project.removeChild(project.children[1])
       }
    }

})()