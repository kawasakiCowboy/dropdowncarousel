const button = document.querySelector(".button");
const dropdown = document.querySelector(".options");

button.addEventListener("click", () => {
    dropdown.setAttribute("style", dropdown.getAttribute("style") === "visibility: hidden;" ? "visibility: visible;" : "visibility: hidden;");
    option = dropdown.querySelectorAll(".option");
    option.forEach(element => {
        element.addEventListener("click", (e) => {
            button.textContent = e.target.textContent;
            dropdown.setAttribute("style", dropdown.getAttribute("style") === "visibility: hidden;" ? "visibility: visible;" : "visibility: hidden;");
        })        
    });
})

const onClickOutside = (element, callback) => {
    document.addEventListener('click', e => {
      if (!element.contains(e.target)) callback();
    });
  };

onClickOutside(button, () => dropdown.setAttribute("style", "visibility: hidden;"));


// SLIDER 

dots = document.querySelectorAll(".dot");
dots.forEach((e) => {
    e.addEventListener("click", () => {
        goToSlide(Number(e.id));
    })
})

let currentSlideId = 1;

function goToSlide(selectorId) {
    if (selectorId > currentSlideId) {
        while ( selectorId - currentSlideId > 0 ) {
            forward();
        }
        // currentSlideId = selectorId; 
    } else if (selectorId < currentSlideId) {
        while (currentSlideId - selectorId  > 0 ) {
            backward();
        }
        currentSlideId = selectorId;
    }
}

const forwardButton = document.querySelector(".forward");
forwardButton.addEventListener("click", () => {
    forward();
})

const backwardButton = document.querySelector(".backward");
backwardButton.addEventListener("click", () => {
    backward();
})

function forward() {
    let imgContainer = document.querySelector(".images");
    let currentImg = document.querySelector(".img-container").querySelector("img");
    currentImg.setAttribute("style", "visibility: hidden");
    let newImg = document.querySelector(".archive").querySelector("img");
    newImg.setAttribute("style", "visibility: visible");
    let archive = document.querySelector(".archive");
    imgContainer.append(newImg);
    archive.append(currentImg);
    document.getElementById(`${currentSlideId}`).classList.remove("active");
    if (currentSlideId === 4) {
        currentSlideId = 0;
    }
    document.getElementById(`${currentSlideId + 1}`).classList.add("active");
    currentSlideId++;
}


function backward() {
    let imgContainer = document.querySelector(".images");
    let currentImg = document.querySelector(".img-container").querySelector("img");
    currentImg.setAttribute("style", "visibility: hidden");
    let newImgArray = document.querySelector(".archive").querySelectorAll("img");
    let newImg = newImgArray[newImgArray.length - 1]
    newImg.setAttribute("style", "visibility: visible");
    let archive = document.querySelector(".archive");
    imgContainer.append(newImg);
    archive.prepend(currentImg);
    document.getElementById(`${currentSlideId}`).classList.remove("active");
    if (currentSlideId === 1) {
        currentSlideId = 5;
        console.log(currentSlideId);
    }
    document.getElementById(`${currentSlideId - 1}`).classList.add("active");
    currentSlideId--;
}

function slide() {
    setTimeout(() => {
        forward()
        slide();
    }, 2000)
}

slide();
