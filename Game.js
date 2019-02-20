const GameState = Object.freeze({
    WELCOME:   Symbol("welcome"),
    ENTER:  Symbol("enter"),
    BUY:  Symbol("buy"),
    GAME: Symbol("game"),
    CONTINUE: Symbol("continue"),
    RADIUM: Symbol("radium"),
    SKELETON: Symbol("skeleton"),
    CUPBOARD: Symbol("cupboard"),
    LAKE: Symbol("lake"),
    COFFIN: Symbol("coffin"),
    OPEN: Symbol("open"),
    EXIT: Symbol("exit")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOME;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOME:
                sReply = "Welcome, It's a Haunted House, if want to visit or play game then Press ENTER ";
                this.stateCur = GameState.ENTER;
                break;

            case GameState.ENTER:
                if(sInput.toLowerCase().match("enter")){
                    sReply = "There is a ticket of $20, Do you want to BUY it ?";
                    this.stateCur = GameState.BUY;
                }else{
                    sReply ="Oops you can't enter without ticket ";
                    this.stateCur = GameState.EXIT;
                }
                break;

            case GameState.BUY:
                if(sInput.toLowerCase().match("buy")){
                    sReply = "Now you can enter the haunted house, Press GAME if you want to play or else just visit ?";
                    this.stateCur = GameState.GAME;
                }else{
                    sReply ="Sry you are out of game now so just visit and enjoy ";
                    this.stateCur = GameState.EXIT;
                }
                break;

            case GameState.GAME:
                if(sInput.toLowerCase().match("game")){
                    sReply = "The game is really hard and place is so spooky so are you sure you want to Continue it or end?";
                    this.stateCur = GameState.CONTINUE;

                }else{
                    sReply = "Sry you are out of game now so just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
            case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = "You can see the treasure in front of you, To get the first half of key, search for radium box and look into it for the first half and press RADIUM to continue ";
                    this.stateCur = GameState.RADIUM;

                }else{
                    sReply = "Sry you are out of game now so just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
            case GameState.RADIUM:
                if(sInput.toLowerCase().match("radium")){
                    sReply = "Wow you got the first half of the key, to get the second half of key, search for skeleton and look into it for the second half and press SKELETON to continue ";
                    this.stateCur = GameState.SKELETON;

                }else{
                    sReply = "Sry you are out of game now so just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
            case GameState.SKELETON:
                if(sInput.toLowerCase().match("skeleton")){
                    sReply = "Wow you got the second half of the key, search for cupboard and look into it for the third half and press CUPBOARD to continue ";
                    this.stateCur = GameState.CUPBOARD;

                }else{
                    sReply = "Sry you are out of game now so just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
            case GameState.CUPBOARD:
                if(sInput.toLowerCase().match("cupboard")){
                    sReply = "Wow you got the third half of the key, search for lake and look into it for the Fourth half and press LAKE to continue ";
                    this.stateCur = GameState.LAKE;

                }else{
                    sReply = "Sry you are out of game now so just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
            case GameState.LAKE:
                if(sInput.toLowerCase().match("lake")){
                    sReply = "Wow you got the fourth half of the key, search for coffin and look into it for the Final half and press COFFIN to continue ";
                    this.stateCur = GameState.COFFIN;

                }else{
                    sReply = "Sry you are out of game now so just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
            case GameState.COFFIN:
                if(sInput.toLowerCase().match("coffin")){
                    sReply = "Wow you got the Final parts of the key, Now you can Open the treasure and get your gifts, press OPEN";
                    this.stateCur = GameState.OPEN;

                }else{
                    sReply = "Sry you are out of game now so just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
            case GameState.OPEN:
                if(sInput.toLowerCase().match("open")){
                    sReply = "Congratulaion you have completed the game, hope so you enjoyed it and like your gift, Thank you";
                    this.stateCur = GameState.EXIT;

                }else{
                    sReply = "Sry you are out of game or finished it so now just visit and enjoy.";
                    this.stateCur = GameState.EXIT;
    
                }
                break;
        }
        return([sReply]);
    }
}