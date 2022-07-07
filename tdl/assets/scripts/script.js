const form = document.getElementById("form");

form.addEventListener("focusout", (event) => {
  console.log("focusout form", event.target);
});

document.getElementById("input-1").addEventListener("blur", (event) => {
  console.log("blur", event.target);
});

document.getElementById("input-1").addEventListener("focusout", (event) => {
  console.log("focusout", event.target);
});

document.getElementById("input-1").addEventListener("change", (event) => {
  console.log("change", event.target, event.target.value);
});

document.getElementById("input-1").addEventListener("keydown", (event) => {
  console.log("key", event.target, event.target.value);
});
