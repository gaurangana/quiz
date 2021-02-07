class Question{
    constructor(){

      this.title= createElement("h3")
      this.question = createquestion("enter name");
      this.option1 = createButton('Play');
      this.option2 = createElement('h3');
  
      }
  hide(){
    this.question.hide();
    this.option1.hide() ;
    this.option2.hide() ;
    
  }
      display(){
        
          this.title.html("TheQuiz Game") ;
          this.title.position(350,0) ;

          this.question.html("Question:- What starts and ends with the eltter 'E' , but only has one letter? ") ;
          this.question.position(150, 80) ;

          this.option1.html("1: Everyone ") ;
          this.option1.position(150, 100) ;

          this.option2.html("2: Envelope ") ;
          this.option2.position(150, 120) ;

          this.input1.position(150,230)

  }
   }