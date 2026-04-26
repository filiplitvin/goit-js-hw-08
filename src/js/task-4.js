const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handleFontSizeChange = (event) => {
  text.style = `font-size: ${event.target.value}px`;
};

control.addEventListener("input", handleFontSizeChange);
