//mdn event reference

let myVariable;
myVariable = "working";
console.log(myVariable);

aboutSection.style.display = "none"
castSection.style.display = "none"

let aboutParagraph = document.getElementById('aboutID');
aboutParagraph.addEventListener('click', () => {
  aboutSection.style.display = "block";
  castSection.style.display = "none";
});

let castParagraph = document.getElementById('castID');
castParagraph.addEventListener('click', () => {
  castSection.style.display = "block";
  aboutSection.style.display = "none";
});

let filmParagraph = document.getElementById('filmID');
filmParagraph.addEventListener('click', () => {
  castSection.style.display = "none";
  aboutSection.style.display = "none";
});
