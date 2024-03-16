let input=document.getElementById("inp")
let text=document.querySelector(".text")
function Add(){
    if(input.value==""){
        alert("List is empty");
    }
    else{
        let newEle=document.createElement("ul")
        newEle.innerHTML=`${input.value}<i class="fa-solid fa-trash"></i>`
        text.appendChild(newEle)
        input.value=""
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    }
}