//mdn event reference

//just for my own reference
let myVariable;
myVariable = "working";
console.log(myVariable);

// initialized as none so that they do not show initially
aboutSection.style.display = "none"
castSection.style.display = "none"

// to show about paragraph only when about its clicked
let aboutParagraph = document.getElementById('aboutID');
aboutParagraph.addEventListener('click', () => {
  aboutSection.style.display = "block";
  castSection.style.display = "none";
});

// to show cast part only when about its clicked
let castPart = document.getElementById('castID');
castPart.addEventListener('click', () => {
  castSection.style.display = "block";
  aboutSection.style.display = "none";
});

// to show movie only when its clicked
let movie = document.getElementById('filmID');
movie.addEventListener('click', () => {
  castSection.style.display = "none";
  aboutSection.style.display = "none";
});
