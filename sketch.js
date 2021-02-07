var canva ;
var gameState = 0 ;
var  constantCount , database ;
var  quiz , question , contestant ;


function setup(){
  canvas = createCanvas(850,400);
//assign firebase database to var database.
 database= firebase.database() ; 

  // create object for quiz class
quiz = new Quiz() ;

  // call getState and start() from quiz class
quiz.getState() ;
quiz.start() ;
}


function draw(){
  background("pink");
  if(contestantCount=== 4){
    quiz.update(1) ;

   }
  
   if(gameState=== 1){
    quiz.play()
   }
  
}
