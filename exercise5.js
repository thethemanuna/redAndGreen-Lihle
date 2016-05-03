
//Grab div element from the DOM
var div = document.getElementById("square");
div.style.backgroundColor = "white";

//Grab button element from the DOM
var button = document.getElementById("button1");
button.onclick = function(){
	if(div.style.backgroundColor == "white"){
		div.style.backgroundColor = "red"
		button.style.color = "green";
	}
	else if(div.style.backgroundColor == "red"){
		div.style.backgroundColor = "green"
		button.style.color = "red";
	}

}