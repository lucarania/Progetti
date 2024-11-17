const trofei = document.querySelector("div");
const btn1 = document.querySelector(".add");
const btn2 = document.querySelector(".remove");

btn1.addEventListener("click", () => {
  const add = Number(trofei.innerHTML);
  trofei.innerHTML = add + 100;
});

btn2.addEventListener("click", () => {
  const remove = trofei.innerHTML;
  trofei.innerHTML = remove - 100;
});
