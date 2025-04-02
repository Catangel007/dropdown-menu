import "./style.css";
import leftIcon from "./angle-square-left.svg";
import rightIcon from "./angle-square-right.svg";
import image1 from "./57380.jpg";
import image2 from "./2703862.jpg";
import image3 from "./3433931.jpg";


// dropdown menu
const dropdownBtn = document.querySelector(".show");
const visibleDiv = document.querySelector(".visible");
visibleDiv.style.display="none";
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


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxNEWxPROGRAMxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// Image Carousel
const div = document.querySelector("#image-carousel");
const divChild= document.createElement("div");
divChild.className = "image-display";
const divLeft = document.createElement("div");
const divRight = document.createElement("div");


const leftArrow = document.createElement("img");
leftArrow.src = leftIcon;
const rightArrow = document.createElement("img");
rightArrow.src = rightIcon;

divLeft.appendChild(leftIcon);
divRight.appendChild(rightIcon);
div.appendChild(divLeft);
div.appendChild(divChild);
div.appendChild(divRight); // Add navigation to container

const imageArray = [image1,image2,image3];

const divChildImage = document.createElement("img");

// Set initial image
let currentIndex = 0;
divChildImage.src = imageArray[currentIndex];
divChild.appendChild(divChildImage);

// Simplified rotation functions
function rotateRight() {
  currentIndex = (currentIndex + 1) % imageArray.length;
}

function rotateLeft() {
  currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
}

// Event listeners with proper rotation
leftArrow.addEventListener("click", () => {
  rotateLeft();
  divChildImage.src = imageArray[currentIndex];
});

rightArrow.addEventListener("click", () => {
  rotateRight();
  divChildImage.src = imageArray[currentIndex];
});
