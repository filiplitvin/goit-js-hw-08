const form = document.querySelector("form");

const handleBgChange = (event) => {
  document.body.style.backgroundColor = event.target.value;
};
form.addEventListener("change", handleBgChange);
