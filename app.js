const leftBtn = document.querySelector("#left-btn");
const middleBtn = document.querySelector("#middle-btn");
const rightBtn = document.querySelector("#right-btn");
const leftImg = document.querySelector("#left-img");
const middleImg = document.querySelector("#middle-img");
const rightImg = document.querySelector("#right-img");

function onclick(btn, img, audio) {
  btn.addEventListener("mousedown", () => {
    img.style.display = "inline";
    audio.play();
  });
  btn.addEventListener("mouseup", () => {
    img.style.display = "none";
    audio.load();
  });
}
onclick(leftBtn, leftImg, bamboleo);
onclick(middleBtn, middleImg, mj);
onclick(rightBtn, rightImg, ymca);

document.addEventListener("keydown", (event) => {
  if (event.key == "b") {
    leftImg.style.display = "inline";
    bamboleo.play();
  } else if (event.key == "m") {
    middleImg.style.display = "inline";
    mj.play();
  } else if (event.key == "y") {
    rightImg.style.display = "inline";
    ymca.play();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key == "b") {
    leftImg.style.display = "none";
    bamboleo.load();
  } else if (event.key == "m") {
    middleImg.style.display = "none";
    mj.load();
  } else if (event.key == "y") {
    rightImg.style.display = "none";
    ymca.load();
  }
});
