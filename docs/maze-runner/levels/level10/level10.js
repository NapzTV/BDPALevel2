function runLevel(){ 
  var cabbageMan = new MazeRunner.CabbageMan(); 
  cabbageMan.moveRight(1); 
  cabbageMan.calculatePassword("RIGHT", decidePassword);
  cabbageMan.moveRight(2); 
  cabbageMan.calculatePassword("RIGHT", decidePassword);
  cabbageMan.moveRight(16); 
} 

function decidePassword(prompt){ 
	return prompt * 2 + 1;
}




//returns the result of multiplying the prompt by 2 and adding 1