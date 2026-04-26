const input = document.querySelector("#validation-input");

const handleValidation = (event) => {
  const requestedLength = event.target.dataset.length;
  const actualLength = event.target.value.length;
};

input.addEventListener("blur", handleValidation);
