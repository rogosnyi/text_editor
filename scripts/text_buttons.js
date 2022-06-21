const boldBtn = document.querySelector("#bold-btn");
const underlineBtn = document.querySelector("#underline-btn");
const italicBtn = document.querySelector("#italic-btn");
const colorBtn = document.querySelector("#color-btn");

const leftBtn = document.querySelector("#justify-left");
const centerBtn = document.querySelector("#justify-center");
const rightBtn = document.querySelector("#justify-right");

const arialBtn = document.querySelector("#arial-btn");

boldBtn.addEventListener("click", () => {
  document.execCommand("bold");
});

underlineBtn.addEventListener("click", () => {
  document.execCommand("underline");
});

italicBtn.addEventListener("click", () => {
  document.execCommand("italic");
});

colorBtn.addEventListener("input", () => {
  document.execCommand("forecolor", false, colorBtn.value);
});

leftBtn.addEventListener("click", () => {
  document.execCommand("justifyLeft");
});

centerBtn.addEventListener("click", () => {
  document.execCommand("justifyCenter");
});

rightBtn.addEventListener("click", () => {
  document.execCommand("justifyRight");
});

function fontEditor(fontName) {
  document.execCommand("fontName", false, fontName);
}
