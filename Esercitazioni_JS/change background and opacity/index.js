let btn = document.querySelector("button");
const inputColor = document.querySelector(".color");
const opacityColor = document.querySelector(".opacity");

btn.addEventListener("click", () => {
  if (inputColor.value && opacityColor.value) {
    document.body.style.backgroundColor = inputColor.value;
    document.body.style.opacity = opacityColor.value;
  } else alert("devi riempire entrambi i campi");
});
