
const input = document.querySelector("#textinput")
console.log(input)
const btn = document.querySelector("#submitbtn")
console.log(btn)
const ul = document.querySelector(".todolist")
const trash = document.querySelector("#trash")
console.log(ul)
// function addTask(){
//   if(input.value=""){
//     alert("you must write something");
//   }else{
//     let li = document.createElement("li");
//     item=ul.append(li)
//     item.innerHTML = input.value


//   }
//   input.value=""

// }
function showTask(){
  ul.innerHTML = localStorage.getItem("data");
  const trashIcons = document.querySelectorAll("#trash");
  trashIcons.forEach(trash => {
    trash.addEventListener("click", () => {
      trash.parentNode.remove();
      saveData();
    });
  });
}

showTask();
btn.addEventListener("click", ()=>{
  console.log("Button is clicked")
  if(input.value ===""){
    alert("you must write something");
  }else{
    let li = document.createElement("li");
    li.innerHTML = `${input.value} <i class="fas fa-times" id="trash"></i>`
    // li.style.color="red"
     ul.append(li)
     input.value=""
     saveData()
    
    //  you should use li.querySelector("#trash") instead of document.querySelector("#trash"). This will search for the trash icon within the li element that you just created, rather than the entire document.
     const trash = li.querySelector("#trash")
     trash.addEventListener("click", ()=>{
      li.remove()
      console.log("item has been removed")
      saveData()
    
     })

    


  }

  
  // input.value=""

})
function saveData(){
  localStorage.setItem("data",ul.innerHTML )
}

