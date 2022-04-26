const leftBtn = document.querySelector("#left-btn");
const middleBtn = document.querySelector("#middle-btn");
const rightBtn = document.querySelector("#right-btn");
const leftImg = document.querySelector("#left-img");
const middleImg = document.querySelector("#middle-img");
const rightImg = document.querySelector("#right-img");

// leftBtn.addEventListener("mousedown",() =>{
// leftImg.style.display ="inline"

// })
// leftBtn.addEventListener("mouseup",() =>{
//     leftImg.style.display ="none"

//     })

function onclick(btn, img) {
  btn.addEventListener("mousedown", () => {
    img.style.display = "inline";
  });
  btn.addEventListener("mouseup", () => {
    img.style.display = "none";
  });
}
function playAudio(x) {
    x.play();
}

function pauseAudio(x) {
    x.load();
}


onclick(leftBtn, leftImg);
onclick(middleBtn, middleImg);
onclick(rightBtn, rightImg);

document.addEventListener('keydown',(event) =>{
    if(event.key == "b"){
        leftImg.style.display = "inline";
        playAudio(bamboleo)
    }
    else if(event.key == "m"){
        middleImg.style.display = "inline";
        playAudio(mj)
    }
    else if(event.key == "y"){
        rightImg.style.display = "inline";
        playAudio(ymca)
    }
})

document.addEventListener('keyup',(event) =>{
    if(event.key == "b"){
        leftImg.style.display = "none";
        pauseAudio(bamboleo)
    }
    else if(event.key == "m"){
        middleImg.style.display = "none";
        pauseAudio(mj)
    }
    else if(event.key == "y"){
        rightImg.style.display = "none";
        pauseAudio(ymca)
    }
})