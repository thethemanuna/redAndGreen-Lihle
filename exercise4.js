

var square = document.getElementById("square");
var button = document.getElementById("button1");
square.style.backgroundColor = "white";

while(square.style.backgroundColor != "blue"){
	button.onclick = function(){
		if(square.style.backgroundColor == "white"){
			square.style.backgroundColor = "red";
		}
		else if(square.style.backgroundColor == "red"){
			square.style.backgroundColor = "green";
		}
		
	}
}


