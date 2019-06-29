
var player = require("first");
var mes = require("mes");
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        Game.gameManager.sceneName="gameScene2";
        console.log(player.map.showgameScene2All())
        this.initgameScene2()
    },
    initgameScene2() {
        for (var i = 0; i < player.map.showgameScene2Length(); i++) {
            var node = player.map.showgameScene2(i);
            switch (node) {
                case "flower":
                    uiManager.createMapUI("flower", function (obj) {
                        cc.find("Canvas").addChild(obj);
                        obj.setPosition(Game.mes.gameScene2.flower);
                    })
                    break;
                case "splinter1":
                    uiManager.createMapUI("splinter", function (obj) {
                        obj.name = "splinter1";
                        cc.find("Canvas/splinter").addChild(obj);
                        obj.getComponent(cc.BoxCollider).tag = 21;
                        obj.setPosition(Game.mes.gameScene2.splinter1);
                    })
                    break;
                case "splinter2":
                    uiManager.createMapUI("splinter", function (obj) {
                        obj.name = "splinter2";
                        cc.find("Canvas/splinter").addChild(obj);
                        obj.getComponent(cc.BoxCollider).tag = 22;
                        obj.setPosition(Game.mes.gameScene2.splinter2);
                    })
                    break;
                case "fence":
                    uiManager.createMapUI("fence", function (obj) {
                        cc.find("Canvas").addChild(obj);
                        obj.setPosition(Game.mes.gameScene2.fence);
                        cc.find("Canvas").getComponent("gameScene2").clickEvent("fence");
                    })
                    break;
                case "wallShu":
                    uiManager.createMapUI("wallShu", function (obj) {
                        cc.find("Canvas/wallAll").addChild(obj);
                        obj.setPosition(Game.mes.gameScene2.wallShu);
                        cc.find("Canvas").getComponent("gameScene2").clickEvent("wallShu");
                    })
                    break;
                case "jumpDoor":
                    uiManager.createMapUI("jumpDoor", function (obj) {
                        cc.find("Canvas/jump_door").addChild(obj);
                        obj.setPosition(Game.mes.gameScene2.jumpDoor);
                        cc.find("Canvas").getComponent("gameScene2").clickEvent("jumpDoor");
                    })
                    break;
                default:
                    break;
            }
        }
    },
    clickEvent(name) {
        if (name == "fence") {
            this.fenceNode = cc.find("Canvas/fence");
            this.fenceNode.on("touchstart", this.open, this);
        }
        else if (name == "wallShu") {
            this.wallNode = cc.find("Canvas/wallAll/shu");
            this.wallNode.on("touchstart", this.open, this);
        }
        else if (name == "jumpDoor") {
            this.jumpDoorNode = cc.find("Canvas/jump_door/jump_door3");
            this.jumpDoorNode.on("touchstart", this.open, this);
        }
    },
    open(event) {
        if (cc.find("bag").getComponent("bagEvent").hammerOpen) {
            cc.find("bag").getComponent("bagEvent").btnHammer();
            if (event.target.name == "fence") {
                this.fenceNode.off("touchstart", this.openFence, this);
                this.fenceNode.getComponent(cc.Animation).play();
                this.fenceNode.getComponent(cc.Animation).on("finished", function () {
                    cc.find("Canvas/fence").destroy();
                    player.map.deletegameScene2("fence");
                    cc.find("Canvas").getComponent("gameScene2").checkOpen()
                    console.log(player.map.showgameScene2All())
                })
            }
            else if(event.target.name=="shu"){
                this.wallNode.off("touchstart", this.openWall, this);
                this.wallNode.getComponent(cc.Animation).play();
                this.wallNode.getComponent(cc.Animation).on("finished", function () {
                    cc.find("Canvas/wallAll/shu").destroy();
                    player.map.deletegameScene2("wallShu");
                    cc.find("Canvas").getComponent("gameScene2").checkOpen()
                    console.log(player.map.showgameScene2All())
                })
            }
            else if(event.target.name=="jump_door3"){
                this.jumpDoorNode.off("touchstart", this.openWall, this);
                this.jumpDoorNode.getComponent(cc.Animation).play();
                this.jumpDoorNode.getComponent(cc.Animation).on("finished", function () {
                    cc.find("Canvas/jump_door/jump_door3").destroy();
                    player.map.deletegameScene2("jumpDoor");
                    cc.find("Canvas").getComponent("gameScene2").checkOpen()
                    console.log(player.map.showgameScene2All())

                })
            }

        }

    },

    checkOpen(){
        for (var i = 0; i < player.map.showgameScene2Length(); i++) {
            if(player.map.showgameScene2(i)=="jumpDoor" || player.map.showgameScene2(i)=="wallShu"){
                mes.switch = false;
            }
            else if(i == player.map.showgameScene2Length()-1){
                mes.switch = true;
            }
        }
        console.log("*****************")
        console.log(mes.switch)
        console.log("*****************")
    }

    // update (dt) {},
});
