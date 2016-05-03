
	var box = document.getElementById("box");
	box.style.backgroundColor = "green";
	if(box.style.backgroundColor === "green"){
		alert("Fail");
		box.style.backgroundColor = "red";
	}
	if(box.style.backgroundColor === "red"){
		alert("Success!");
	}
	alert(box.style.backgroundColor);

	

