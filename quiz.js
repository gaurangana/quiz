class Quiz{
    constructor(){

    }

    getState(){
        database.ref("contestantCount").on("value", function(data){
            contestantCount = data.val()
            }
              )
                  }
    

    update(){
        database.ref("/").update({
            gameState : state
          })
        }

    async start(){
        if(gameState === 0){
            contestant = new Contestant() ;
            var contestantCountRef = await database.ref('contestantCount').once("value") ;
            if(contestantCountRef.exists()){
             contestantCount = contestantCountRef.val() ;
             constestant.getCount() ;
            } 
            question = new Question() ;
            question.display() ;
        }
    }
}