cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad () {
        Game.gameManager.sceneName="gameAll";
        Game.gameManager.gameStart = false;
    },

    gameOne(){
        uiManager.creategame("gameOne");
        Game.gameManager.sceneName="gameOne";
    },
    gameTwo(){
        uiManager.creategame("gameTwo");
        Game.gameManager.sceneName="gameTwo";
    },
    gameThree(){
        uiManager.creategame("gameThree");
        Game.gameManager.sceneName="gameThree";
    },
    gameFour(){
        uiManager.creategame("gameFour");
        Game.gameManager.sceneName="gameFour";
    },
    gameFive(){
        uiManager.creategame("gameFive");
        Game.gameManager.sceneName="gameFive";
    },
    gameFindDiff(){
        uiManager.creategame("gameFindDiff");
        Game.gameManager.sceneName="gameFindDiff";
    },



});
