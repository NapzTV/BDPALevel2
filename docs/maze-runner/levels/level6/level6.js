<<<<<<< HEAD
function runLevel(){ 
  var cabbageMan = new MazeRunner.CabbageMan(); 
  cabbageMan.moveRight(); 
  cabbageMan.calculatePassword("RIGHT", decidePassword);
  cabbageMan.moveRight(18); 
} 

function decidePassword(prompt){ 
 if(prompt > 5){ 
    return "BIG"; 
 } else { 
   return "SMALL"; 
 }
}
=======


    function decidePassword(prompt){
        if(prompt > 5){
            return "BIG";
        } else {
            return "SMALL";
        }
    }

    function runLevel(){
        var cabbageMan = new MazeRunner.CabbageMan();
        cabbageMan.moveRight();
        cabbageMan.calculatePassword("RIGHT", decidePassword);
        cabbageMan.moveRight(18);
    }
>>>>>>> d37d4be3ca13a4bacfe6af74a01e6fba0cb755bc
