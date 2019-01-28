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
	document.getElementById("top").classList.remove("blue");
	document.getElementById("bottom").classList.remove("blue");
	document.getElementById("top").classList.remove("yellow");
	document.getElementById("bottom").classList.remove("yellow");
	document.getElementById("top").classList.toggle("purple");
	document.getElementById("bottom").classList.toggle("purple");
	document.getElementById("text").innerHTML = "Galaxy Look";
	
}
function two(el) {
	document.getElementById("two").classList.toggle("skull");
	document.getElementById("top").classList.toggle("blue");
	document.getElementById("bottom").classList.toggle("blue");
	document.getElementById("top").classList.remove("purple");
	document.getElementById("bottom").classList.remove("purple");
	document.getElementById("top").classList.remove("yellow");
	document.getElementById("bottom").classList.remove("yellow");
	document.getElementById("text").innerHTML = "Skull Look";
}
function three(el) {
	document.getElementById("three").classList.toggle("sunflower");
	document.getElementById("top").classList.remove("blue");
	document.getElementById("bottom").classList.remove("blue");
	document.getElementById("top").classList.remove("purple");
	document.getElementById("bottom").classList.remove("purple");
  	document.getElementById("top").classList.toggle("yellow");
	document.getElementById("bottom").classList.toggle("yellow");
	document.getElementById("text").innerHTML = "Sunflower Look";
}
