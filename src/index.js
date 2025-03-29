import "./style.css";

const dropdownBtn = document.querySelector(".show");
const visibleDiv = document.querySelector(".visible");
dropdownBtn.addEventListener("click",()=>{
   displayMenu()
})


visibleDiv.style.display="none";
function displayMenu(){
    if(visibleDiv.style.display === "none"){
        visibleDiv.style.display = "block"
    }else {
        visibleDiv.style.display = "none";
    }
    rotateCarousel(imageArray);
}

// Image Carousel
const div = document.querySelector("#image-carousel");
const divChild= document.createElement("div");
divChild.className = "image-display";
div.appendChild(divChild);

const imageArray = [];

function rotateCarousel(images,left,right){
   
    for (let image of images){
     const divChildImage = document.createElement("img");
       image.src = images;
       divChild.appendChild(divChildImage);
    }

    if (left === true){
        imageArray.length
    }
}