// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function opacity(el){
	el.classList.add("opaque");
}
function regular(el){
	el.classList.remove("opaque");
}

function one(el) {
	document.getElementById("one").classList.toggle("galaxy");
}
function two(el) {
	document.getElementById("two").classList.toggle("skull");
}
function three(el) {
  document.getElementById("three").classList.toggle("sunflower");
}
