<<<<<<< HEAD
function runLevel(){ 
  var cabbageMan = new MazeRunner.CabbageMan(); 
  cabbageMan.moveRight(4); 
  cabbageMan.calculatePassword("UP", decidePassword);
    cabbageMan.moveUp(2); 
    cabbageMan.moveRight(14); 
	  cabbageMan.calculatePassword("DOWN", decidePassword);
	      cabbageMan.moveDown(2);
		      cabbageMan.moveRight();
} 

function decidePassword(prompt){ 
// if(prompt > 1){ 
   return "BIG"; 
// } else { 
   return "SMALL"; 
// }
}
=======


    function decidePassword(prompt){
        if(prompt > 1){
            return "BIG";
        } else {
            return "SMALL";
        }
    }

    function runLevel(){
        var cabbageMan = new MazeRunner.CabbageMan();
        cabbageMan.moveRight(4);
        cabbageMan.calculatePassword("UP", decidePassword);
        cabbageMan.moveUp(2);
        cabbageMan.moveRight(14);
        cabbageMan.calculatePassword("DOWN", decidePassword);
        cabbageMan.moveDown(2);
        cabbageMan.moveRight();
    }
>>>>>>> d37d4be3ca13a4bacfe6af74a01e6fba0cb755bc
