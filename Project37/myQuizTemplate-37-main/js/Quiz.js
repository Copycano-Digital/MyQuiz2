class Quiz {
    constructor(){
        
    }
    getState(){

    }
    update(){

    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var cCRef = await database.ref('contestantCount').once('value');
            if (cCRef.exists()){
                contestantCount = cCRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
}