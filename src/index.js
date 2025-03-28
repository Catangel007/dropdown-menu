

const dropdownBtn = document.querySelector(".show");
const visibleDiv = document.querySelector(".visible");
dropdownBtn.addEventListener("click",()=>{
   displayMenu()
})


function displayMenu(){
    if(visibleDiv.style.display === "none"){
        visibleDiv.style.display = "block"
    }else {
        visibleDiv.style.display = "none";
    }
}