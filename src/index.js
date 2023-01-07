// First we are selecting all the inputs
const inputs = document.querySelectorAll(".controls input");
const resetBtn = document.querySelector(".reset-btn");

// function for the process
function handleUpdate() {
  const suffix = this.dataset.size || " ";
  console.log(suffix);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
function resetInputs() {
  const suffix = this.dataset.size || " ";
  const spaceValue = document.getElementById("spacing").value;
  document.getElementById("blur").value = "";
  document.documentElement.style.setProperty((spaceValue = "0" + suffix));
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
resetBtn.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});
resetBtn.addEventListener("click", resetInputs);
