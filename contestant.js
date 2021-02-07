class Contestant{
    constructor(){
    this.distance = 0 ;
    this.index = null ;
    this.name = null ;
    }
    getCount(){
        database.ref("contestantCount").on("value", function(data){
            pCount = data.val()
            }
              )
                  }
    
    update(state){
        
          var playerIndex = "players/player" + this.index
          database.ref(playerIndex).set({
            'name': this.name ,
            'distance': this.distance
        }      )
      }
    
    updateCount(count){
    database.ref("/").update({ 
        contestantCount : count
    })
    }
    
    static getContestantInfo(){
      database.ref("contestant").on("value", ()=>{
        allContestant= data.val()
      })
    }
    }
    