var player = require("first");
var mes = require("mes")
//userData.play.
cc.Class({
    extends: cc.Component,

    properties: {
        chest_open: cc.SpriteFrame,
        switchOpen: cc.SpriteFrame,
        switchClose: cc.SpriteFrame,
        characters:cc.SpriteFrame,
    },

    onLoad() {
        Game.gameManager.sceneName = "gameScene1";
        Game.gameManager.judge_newGame = false;
        Game.gameManager.gameStart = true;
        console.log(player.map.showgameScene1All())
        this.doorName;
        this.initgameScene1();
        cc.find("characters").getComponent("characters").dead=false;
    },
    initgameScene1() {
        for (var i = 0; i < player.map.showgameScene1Length(); i++) {
            var node = player.map.showgameScene1(i);
            switch (node) {
                case "doorNull":
                    uiManager.createMapUI("door", function (obj) {
                        obj.name = "doorNull";
                        obj.getChildByName("animal").destroy();
                        obj.getChildByName("door").getComponent(cc.PhysicsBoxCollider).tag = 1;
                        cc.find("Canvas/door").addChild(obj);
                        obj.setPosition(mes.gameScene1.doorNull);
                    })     //Game.mes
                    break;
                case "doorSheep":
                    uiManager.createMapUI("door", function (obj) {
                        obj.name = "doorSheep";
                        obj.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = Game.gameManager.sheep;
                        obj.getChildByName("animal").width = 25;
                        obj.getChildByName("animal").height = 12;
                        obj.getChildByName("door").getComponent(cc.PhysicsBoxCollider).tag = 2;
                        cc.find("Canvas/door").addChild(obj);
                        obj.setPosition(mes.gameScene1.doorSheep);
                    })
                    break;
                case "doorRabbit":
                    uiManager.createMapUI("door", function (obj) {
                        obj.name = "doorRabbit";
                        obj.height = 50;
                        obj.width = 20;
                        obj.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = Game.gameManager.rabbit;
                        obj.getChildByName("animal").width = 15;
                        obj.getChildByName("animal").height = 10;
                        obj.getChildByName("animal").y = 14.3;
                        obj.getChildByName("door").getComponent(cc.PhysicsBoxCollider).tag = 3;
                        cc.find("Canvas/door").addChild(obj);
                        obj.setPosition(mes.gameScene1.doorRabbit);
                    })
                    break;
                case "hammer":
                    uiManager.createMapUI("hammer", function (obj) {
                        cc.find("Canvas").addChild(obj);
                        obj.setPosition(mes.gameScene1.hammer);
                    })
                    break;
                case "keySheep":
                    uiManager.createMapUI("keySheep", function (obj) {
                        cc.find("Canvas").addChild(obj);
                        obj.setPosition(mes.gameScene1.keySheep);
                    })
                    break;
                default:
                    break;
            }
        }
        if (mes.chest) {
            cc.find("Canvas/chest").getComponent(cc.Sprite).spriteFrame = Game.gameManager.chest_open;
            cc.find("Canvas/chest").removeComponent(cc.BoxCollider);
        }
        if (mes.switch) {
            console.log("*****************")
        console.log(mes.switch)
        console.log("*****************")
            uiManager.createMapUI("switch", function (obj) {
                cc.find("Canvas").addChild(obj)
                if (mes.switchBool) {
                    obj.getComponent(cc.Sprite).spriteFrame = cc.find("characters").getComponent("characters").switchOpen;
                }
                else {
                    obj.getComponent(cc.Sprite).spriteFrame = cc.find("characters").getComponent("characters").switchClose;
                }
            })
            cc.find("Canvas/jump_door/jumpDoor").destroy()
        }
    },

    doorDetermined: function (event) {                        //transparentBag=false 点击key使用 
        //this.doorName   
        if (cc.find("bag").getComponent("bagEvent").findKey()) {
            event.target.parent.getChildByName("transparentBag").active = false;
            event.target.getComponent(cc.Button).interactable = false;
            event.target.parent.getChildByName("cancel").getComponent(cc.Button).interactable = false;
            event.target.parent.getChildByName("word").active=false;
            event.target.parent.getChildByName("label").active=true;
            cc.find("bag").getComponent("bagEvent").settouch();
        }
        else {
            cc.find("chooseDoor").destroy();
            uiManager.openUI("tip", function (obj) {
                obj.getComponent("tip").setData(2);
            })
        }
    },
    doorCancel: function () {
        if (this.doorName == "doorNull") {
            this.moveDoor();
        }
        else {
            cc.find("characters").x += 5
        }
        cc.find("chooseDoor").destroy();
        console.log(player.map.showgameScene1All())
    },

    moveDoor: function () {
        var time = 2;
        var path = "Canvas/door/" + this.doorName + "/" + "door";
        var door = cc.find(path)
        var moveDoor = cc.moveTo(time, cc.v2(door.x, door.height));
        door.runAction(moveDoor);
        door.removeComponent(cc.PhysicsBoxCollider);
        if (this.doorName == "doorNull") {
            player.map.deletegameScene1("doorNull");
            console.log(player.map.showgameScene1All())
        }
        else if (this.doorName == "doorSheep") {
            player.map.deletegameScene1("doorSheep");
        }
        else if (this.doorName == "doorRabbit") {
            player.map.deletegameScene1("doorRabbit");
        }
        this.scheduleOnce(function () {
            this.node.getChildByName("door").getChildByName(this.doorName.toString()).destroy();
        }, time)
    },
    /**
     * 初始化按钮
     * @param btnPath
     */
    onBtnHandler: function (btnPath) {
        let btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, 'gameScene1', 'onBtnClick');
    },
    /**
    * 按钮点击事件
    * @param event
    */
    onBtnClick: function (event) {
        switch (event.target.name) {
            case 'determined':
                this.doorDetermined(event);
                break;
            case 'cancel':
                this.doorCancel();
                break;
            default:
                break;
        }
    },
    setdoorName: function (name) {
        this.doorName = name;
        this.onBtnHandler('chooseDoor/determined');
        this.onBtnHandler('chooseDoor/cancel');
    },
    update() {
    }
});
