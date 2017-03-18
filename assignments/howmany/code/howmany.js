function doLevel1(){
alert ('Do Level 1') 
var correctAnswer= "panels"
var userAnswer=prompt ("Type Your Answer Here")
if (correctAnswer==userAnswer) {
	addPoints(3)
	alert ('Correct Answer')
} else {
	subtractPoints(3)
	alert ('Sorry! Wrong Answer. Answer='+ correctAnswer)
}
hide("level1")
show ("level2")
}


function doLevel2(){
alert ('Do Level 2')
var correctAnswer= 9
var userAnswer=prompt ("Type Your Answer Here")
if (correctAnswer==userAnswer) {
	addPoints(9)
	alert ('Correct Answer')
} else {
	subtractPoints(9)
	alert ('Sorry! Wrong Answer. Answer='+ correctAnswer)
}
hide ("level2")
show ("level3")
}


function doLevel3(){
alert ('Do Level 3')
var correctAnswer= "true"
var userAnswer=prompt ("Type Your Answer Here")

if (correctAnswer==userAnswer) {
	addPoints(1)
alert ('Correct Answer!')
} else {
	subtractPoints(1)
	alert ('Sorry wrong answer! Correct answer='+correctAnswer)
}
hide ("level3")
show ("level4")
}


function doLevel4(){
alert ('Do Level 4')
var correctAnswer= "Homer Simpson"
var userAnswer=prompt ("Type Your Answer Here")

if (correctAnswer==userAnswer) {
	addPoints(12)
alert ('Correct Answer!')
} else {
	subtractPoints(12)
	alert ('Sorry wrong answer! Correct answer='+correctAnswer)
}
finalScore()
hide ("level4")
show ("level5")
}

	
	
	
function show(id){
	var el = document.getElementById(id);
	el.classList.remove("hidden");
}


function hide(id){
	var el = document.getElementById(id);
	el.classList.add("hidden")
}

var score = 0;

function addPoints(points){
	score = score + points;
	document.getElementById("score").innerHTML = score;
}

function finalScore() {
		document.getElementById("final-score").innerHTML = score;
}

function subtractPoints(points) {
	score= score - points;
    document.getElementById("score").innerHTML = score;
}