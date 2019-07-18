
//~~~~~~~~~~~~~~~~~~~~~~~~~~Variables~~~~~~~~~~~~~~~~~~~~~~~~~\\
var side = 12; // length of width and height of square grid

var rows = side; // number of rows
var cols = side; // number of columns


//~~~~~~~~~~~~~~~~~~~~~~~CSS Table Set Up~~~~~~~~~~~~~~~~~~~~~~\\
// Column Numbers CSS Style
var columnNums = new Array(cols);
for (var i = 1; i <= side; i++) {
    columnNums[i] = document.getElementById("col" + i);
    columnNums[i].style.textAlign = "center";
    columnNums[i].style.verticalAlign = "bottom";
    columnNums[i].style.backgroundColor = "#9DE0AD";
    columnNums[i].style.paddingBottom = "5px";
	columnNums[i].style.height = "55px";    
}

// Row Numbers CSS Style
var rowNums = new Array(rows);
for (var i = 1; i <= side; i++) {
    rowNums[i] = document.getElementById("row" + i);
    rowNums[i].style.textAlign = "right";
    rowNums[i].style.backgroundColor = "#547980";
    rowNums[i].style.paddingRight = "10px";
    rowNums[i].style.width = "55px";
}
 

//~~~~~~~~~~~~~~~~~~~~~~Toggle Table Cells~~~~~~~~~~~~~~~~~~~~~\\
function toggle() {
  	if (this.style.backgroundColor != "black") {
		this.style.backgroundColor = "black";
	} else {
		this.style.backgroundColor = "lightgrey";
	}
	//console.log(this.style.cssText, this.style.backgroundColor)

	if (this.style.backgroundColor != "black") {
		this.setAttribute('correct', 0); // 0 = unmarked tile
		console.log(this.getAttribute('correct'));
	} else {
		this.setAttribute('correct', 1); // 1 = marked tile
		console.log(this.getAttribute('correct'));
	}
	checkCorrectness("Congratulations! You have found your true self. You are a panda. Embrace your pandaness!");
}

var puzz = new Array(rows * cols); // array for grid cells
for (var r = 1, i = 0; r <= rows; r++) {
    for (var c = 1; c <= cols; c++, i++) {
        puzz[i] = document.getElementById("r" + r + "-" + "c" + c);
        puzz[i].addEventListener("click", toggle);
    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~Reset Button~~~~~~~~~~~~~~~~~~~~~~~~\\
function reset(){
	for(var i = 0; i < puzz.length; i++) {
		puzz[i].style.backgroundColor = "darkgrey";
		puzz[i].setAttribute('correct', 2);
	}
}
document.getElementById('reset').onclick = reset;


//~~~~~~~~~~~~~~~~~~~~~~~Solution Button~~~~~~~~~~~~~~~~~~~~~~~\\
function solution() {
	for(var i = 0; i < puzz.length; i++) {
		var current = puzz[i];
		if (current.getAttribute('answer') == 0) {
			current.style.backgroundColor = "lightgrey";
			current.setAttribute('correct', 0);
		} else {
			current.style.backgroundColor = "black";
			current.setAttribute('correct', 1);
		}
	}
	checkCorrectness("You pressed the solution button.... But that is okay :) You still found your true self: a PANDA!");
}
document.getElementById('solution').onclick = solution;


//~~~~~~~~~~~~~~~~~~~~Turn Light Grey Button~~~~~~~~~~~~~~~~~~~~\\
function turnLightGrey() {
	for(var i = 0; i < puzz.length; i++) {
		var current = puzz[i];
		current.style.backgroundColor = "lightgrey";
		current.setAttribute('correct', 0);
	}
}
document.getElementById('turnLightGrey').onclick = turnLightGrey;


//~~~~~~~~~~~~~~~~~~~~~~~Turn Black Button~~~~~~~~~~~~~~~~~~~~~~\\
function turnBlack() {
	for(var i = 0; i < puzz.length; i++) {
		var current = puzz[i];
		current.style.backgroundColor = "black";
		current.setAttribute('correct', 1);
	}
}
document.getElementById('turnBlack').onclick = turnBlack;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Hint 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
function hint1() {
	alert("It is an animal.")
}
document.getElementById('hint1').onclick = hint1;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Hint 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
function hint2() {
	alert("It is the colour of the tiles.")
}
document.getElementById('hint2').onclick = hint2;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Hint 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
function hint3() {
	alert("They are lazy, clingy balls of happiness.")
}
document.getElementById('hint3').onclick = hint3;


//~~~~~~~~~~~~~~~~~~~~~~Detect Correctness~~~~~~~~~~~~~~~~~~~~~\\
function checkCorrectness(message) {
	var check = new Array(rows * cols);
	for(var i = 0; i < puzz.length; i++) {
		var temp = puzz[i];
		if (temp.getAttribute('correct') == temp.getAttribute('answer')) {
			check[i] = true;
		} else {
			check[i] = false;
		}
	}
	var numTrue = 0;
	for(var i = 0; i < check.length; i++) {
		if (check[i] == true) {
			numTrue++;
		}
	}
	if (numTrue == 144) {
		setTimeout(function() { alert(message); }, 100); // delay alert message after puzzle complete
	}
}







