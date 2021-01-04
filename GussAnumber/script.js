
function check(){
	var x = Math.floor((Math.random() * 10) + 0);
	var n=document.getElementById("userInput").value;
	if(n>9 || n<0 || Math.floor(n)-n != 0 || n==""){
		document.getElementById("out").innerHTML = "Enter an integer number between 0 and 9";
	}else if(x==n){
		document.getElementById("out").innerHTML = "YOU WIN ***";
		document.getElementById("computer").value = x;
	}
	else{
		document.getElementById("out").innerHTML = "Wrong .... Try again!";
		document.getElementById("computer").value = x;
	}
}

function reset(){
	document.getElementById("computer").value = null;
	document.getElementById("userInput").value = null;
	document.getElementById("out").innerHTML = null;
}