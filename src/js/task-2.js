const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleInputChange = (event) => {
  const value = event.target.value;
  if (value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = value;
  }
};

input.addEventListener("input", handleInputChange);
