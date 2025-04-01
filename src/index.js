import "./style.css";
import leftIcon from "./angle-square-left.svg";
import rightIcon from "./angle-square-right.svg";
import image1 from "./57380.jpg";
import image2 from "./2703862.jpg";
import image3 from "./3433931.jpg";

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

// Image Carousel
const div = document.querySelector("#image-carousel");
const divChild= document.createElement("div");
divChild.className = "image-display";
const divLeft= document.createElement("div");
const divRight = document.createElement("div");

divLeft.appendChild(leftIcon);
divRight.appendChild(rightIcon);
div.appendChild(divChild);

const imageArray = [image1,image2,image3];

const divChildImage = document.createElement("img");
  divChild.appendChild(divChildImage);

function rotateCarouselRight(arr){
    if (arr <= 1){
        return arr;
    }

const lastElement = arr[arr.length - 1];

for (let i = arr.length -1; i > 0; i--){
    arr[i]= arr[i-1];
}
arr[0]= lastElement;
return arr;

}rotateCarouselRight(imageArray)

  function rotateCarouselLeft(arr){

    if(arr <= 1){
        return arr;
    }
const firstElement = arr[0];
    for (let i = arr.length - 1; i > 0 ; i--){
     arr[i]= arr[i +1];
    }
 arr[arr.length - 1]= firstElement;
 return arr;
  }rotateCarouselLeft(imageArray);


  function display(){
    leftIcon.addEventListener("click", ()=>{
        divChildImage.src = rotateCarouselLeft;
    })

    rightIcon.addEventListener("click", ()=>{
        divChildImage.src = rotateCarouselRight;
    })
  }display();