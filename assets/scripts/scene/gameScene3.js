var player = require("first");
var mes = require("mes")
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad() {
        Game.gameManager.sceneName="gameScene3";
        this.initgameScene3();
    },

    initgameScene3() {
        for (var i = 0; i < player.map.showgameScene3Length(); i++) {
            var node = player.map.showgameScene3(i);
            switch (node) {
                case "splinter3":
                    uiManager.createMapUI("splinter", function (obj) {
                        cc.find("Canvas").addChild(obj);
                        obj.getComponent(cc.BoxCollider).tag = 31;
                        obj.setPosition(Game.mes.gameScene3.splinter3);
                    })
                    break;
                case "jumpMatrixDown":
                    uiManager.createMapUI("jumpMatrixDown", function (obj) {
                        cc.find("Canvas/jumpMatrix").addChild(obj);
                        var num = Math.random();
                        if (num <= 0.2) {
                            obj.setPosition(Game.mes.gameScene3.jumpMatrixDownTop);
                            Game.mes.jumpDoor[33] = cc.v2(795, 595);
                        }
                        else if (num <= 0.6) {
                            obj.setPosition(Game.mes.gameScene3.jumpMatrixDownLeft);
                            Game.mes.jumpDoor[33] = cc.v2(150, 195);
                        }
                        else {
                            obj.setPosition(Game.mes.gameScene3.jumpMatrixDownRight);
                            Game.mes.jumpDoor[33] = cc.v2(990, 195);
                        }
                    })
                    break;
                default:
                    break;
            }
        }
        if (Game.mes.saw) {
            cc.find("Canvas/saw").active=true;
            cc.find("Canvas/saw").getComponent(cc.Animation).play()
        }
        else{
            cc.find("Canvas/saw").active=false;
        }
    },
    endGame(){
        uiManager.openUI("endGame",function(){
            uiManager.addClickEvent(cc.find("endGame/determined"), cc.find("Canvas"), 'gameScene3', 'onBtnClick');
            uiManager.addClickEvent(cc.find("endGame/cancel"), cc.find("Canvas"), 'gameScene3', 'onBtnClick');

        })
    },
    determined(event){
        cc.find("characters").active=false;
        Game.gameManager.initGameMes();
        Game.gameManager.judge_newGame=false;
        cc.director.loadScene("gameScene1",function(){
            cc.find("characters").getComponent(cc.Sprite).spriteFrame=cc.find("Canvas").getComponent("gameScene1").characters;
            cc.find("characters").active=true;
            cc.find("characters").setPosition(mes.charactersInit);
        });
    },
    cancel(){
        Game.gameManager.btn_list()
        Game.gameManager.initOtherScene();
        Game.gameManager.initGameScene()
        Game.gameManager.initGameMes();
        cc.game.removePersistRootNode(cc.find("characters"));
        cc.game.removePersistRootNode(cc.find("bag"));
        Game.gameManager.btn_list()
        cc.director.loadScene("main")
    },
    /**
    * 按钮点击事件
    * @param event
    */
   onBtnClick: function (event) {
    switch (event.target.name) {
        case 'determined':
            this.determined(event);
            break;
        case 'cancel':
            this.cancel();
            break;
        default:
            break;
    }
},





});
