const body = document.querySelector("body"),
      add_button = body.querySelector(".add_button"),
      icon = body.querySelector(".icon"),
      task = body.querySelector(".task"),
      uncheckedChecked = body.querySelector(".unchecked-checked"),
      addButton = body.querySelector(".add-button"),
      windowAdd = body.querySelector(".window"),
      inputBox = body.querySelector("input"),
      taskList = body.querySelector(".list-of-tasks");
      



     task.addEventListener("click", () =>{
        task.classList.toggle("clicked");
     });

     addButton.addEventListener("click", () =>{
        windowAdd.classList.toggle("show");
     });

     inputBox.addEventListener('keydown', (ev) =>{
         if(ev.key == 'Enter'){
            windowAdd.classList.toggle("show");
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            taskList.appendChild(li);
         }
     });

