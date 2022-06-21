const newBtn = document.querySelector("#new-btn");
const txtBtn = document.querySelector("#txt-btn");
const pdfBtn = document.querySelector("#pdf-btn");
const contetnt = document.querySelector("#content");
const filename = document.querySelector("#filename-input");

newBtn.addEventListener("click", () => {
  contetnt.innerHTML = "";
});

txtBtn.addEventListener("click", () => {
  const a = document.createElement("a");
  const blob = new Blob([contetnt.innerText]);
  const dataUrl = URL.createObjectURL(blob);
  a.href = dataUrl;
  a.download = filename.value + ".txt";
  a.click();
});

pdfBtn.addEventListener("click", () => {
  html2pdf().from(content).save(filename.value);
});
