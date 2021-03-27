class Question {
    constructor(){
        this.title = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createButton('Button1');
        this.option2 = createButton('Button2');
    }
    
    display(){
        this.title.html("The quiz game");
        this.title.position(350,80);
        this.question.html("Question 1 - What Starts with E but only has on letter?");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);
    }


}