function addTask() {

    let task = document.querySelector(`.text-input`).value

    if (task.replaceAll(" ", "") === ""){
        alert(`Campo vazio!`)
        document.querySelector(`.text-input`).value = ``
    }else{
        let taskContainer = document.querySelector(`.checkList`)
        let addDiv = document.createElement(`div`)
    
        addDiv.classList.add(`checks`)
        taskContainer.appendChild(addDiv)
    
        let checkList = taskContainer.lastElementChild
        let addCheck = document.createElement(`input`)
        
        addCheck.type = `checkbox`
        addCheck.classList.add(`box`)
        checkList.appendChild(addCheck)
    
        let createTxt = document.createElement(`p`)
        let addTxt = document.createTextNode(task)
    
    
        createTxt.classList.add(`checkboxTxt`)
        createTxt.appendChild(addTxt)
        checkList.appendChild(createTxt)
        document.querySelector(`.text-input`).value = ``
    }
}

document.addEventListener('keypress', function(e){
    if(e.key === `Enter`){
       const btn = document.querySelector(`.btn`)

       btn.click()
    }
 }, false);