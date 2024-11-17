const inputChange = document.querySelector("input");

inputChange.oninput = () => {
  if (inputChange.value.length > 4) {
    alert("limite raggiunto");
  }
};
