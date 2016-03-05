// Assigns variables with the elements we need to manipulate from the DOM
var sections = document.getElementsByTagName("section");
var outputTarget = document.getElementById("output-target");
var h1 = document.getElementById("page-title");
var guineaPig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var hulkify = document.getElementById("make-large");
var capture = document.getElementById("add-border");
var rounded = document.getElementById("add-rounding");
var buttons = document.getElementsByTagName("button");
var inputField = document.getElementById("keypress-input");

// When any section is clicked the output target text says be "You clicked on the {text of the section} section"
function youClicked(passedArray) {                 
  for (var i = 0; i < passedArray.length; i++) {   // For loop to go through each array item
    passedArray[i].addEventListener("click", function() {    // Adds a function click event
      outputTarget.innerHTML = "You clicked on the " + this.textContent + " section";   // Gets content, pumps to DOM
    })
  }
};

youClicked(sections);  // Calls above function, passing the array of sections.

// When the mouse enters the h1 tag, "You moved you mouse of the header." appears in the output element.
h1.addEventListener("mouseenter", function() {
  outputTarget.innerHTML = "You moved your mouse over the header.";
});

// When the mouse leaves the h1 tag, "You left me!!" appears in the output appears in the output element.
h1.addEventListener("mouseleave", function() {
  outputTarget.innerHTML = "You left me!!";
});

// When you click the "Add color" button, the guinea-pig element's text color changes to blue.
addColor.addEventListener("click", function() {
  guineaPig.classList.add("blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size becomes much larger.
hulkify.addEventListener("click", function() {
  guineaPig.classList.add("bigger");
});

// When you click the "Capture it" button, the guinea-pig element has a border added to it.
capture.addEventListener("click", function() {
  guineaPig.classList.add("capture");
});

// When you click the "Rounded" button, the guinea-pig element's border becomes rounded.
rounded.addEventListener("click", function() {
  guineaPig.classList.add("round");
});

inputField.addEventListener("keyup", function() {
    outputTarget.innerHTML = inputField.value;
});



