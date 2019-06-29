var player = require("first");
var mes = require("mes");
//userData
cc.Class({
    extends: cc.Component,

    properties: {
        Bcharacters: cc.SpriteFrame,
        Scharacters: cc.SpriteFrame,
        prefab_chooseDoor: cc.Prefab,
        switchOpen: cc.SpriteFrame,
        switchClose: cc.SpriteFrame,
    },

    onLoad() {
        this.initCharactersActive();
        this.setMoveXNum();
        this.flowerNum = 0;
        cc.game.addPersistRootNode(this.node);
        this.dead=false;
    },
    initCharactersActive() {
        if (player.play.showsmallActive()) {   //缩小状态
            this.node.getComponent(cc.Sprite).spriteFrame = this.Scharacters;
            this.node.width = 50;
            this.node.height = 55;
            this.node.getComponent(cc.BoxCollider).size = cc.size(50, 55);
            this.node.getComponent(cc.PhysicsBoxCollider).size = cc.size(50, 55);
        }
        else {
            this.node.getComponent(cc.Sprite).spriteFrame = this.Bcharacters;
            this.node.width = 85;
            this.node.height = 100;
            this.node.getComponent(cc.BoxCollider).size = cc.size(75, 100);
            this.node.getComponent(cc.PhysicsBoxCollider).size = cc.size(75, 100);

        }
    },
    move(name) {     //修改大小状态不同的动画和显示
        if (name == "left") {
            var position = cc.v2(this.node.x - this.moveX, this.node.y);
            if (player.play.showsmallActive()) {
                this.node.getComponent(cc.Animation).play("SleftMove");
            }
            else {
                this.node.getComponent(cc.Animation).play("BleftMove");
            }
        }
        else if (name == "right") {
            var position = cc.v2(this.node.x + this.moveX, this.node.y);
            if (player.play.showsmallActive()) {
                this.node.getComponent(cc.Animation).play("SrightMove");
            }
            else {
                this.node.getComponent(cc.Animation).play("BrightMove");
            }
        }
        var action = cc.moveTo(0.3, position).easing(cc.easeQuadraticActionOut())
        this.node.runAction(action);
    },

    onCollisionEnter: function (other, self) {
        if (other.node.group == "goods") {
            var tag = other.node.getComponent(cc.BoxCollider).tag
            switch (tag) {
                case 11: //锤子
                    other.node.destroy();
                    cc.find("bag").getComponent("bagEvent").addHammer();
                    player.map.deletegameScene1("hammer");
                    break;
                case 12://羊钥匙
                    other.node.destroy();
                    cc.find("bag").getComponent("bagEvent").addkey("sheepKey");
                    player.map.deletegameScene1("keySheep");
                    break;
                case 21:   //碎片1
                    uiManager.openUI("gameOne");
                    break;
                case 22:   //碎片2
                    uiManager.openUI("gameThree");
                    break;
                case 31:   //碎片3
                    uiManager.openUI("gameFive");
                    cc.find("Canvas/wallAll/run").getComponent("moveWall").setSpeed0();
                    break;

            }
        }
        else if (other.node.group == "tool") {
            var tag = other.node.getComponent(cc.BoxCollider).tag
            if (tag == 1) {    //chest
                uiManager.openUI("gameFindDiff");
            }
            else if (tag == 2) {    //开关
                mes.switchBool = !mes.switchBool;
                mes.saw = !mes.saw;
                if (mes.switchBool) {
                    other.node.getComponent(cc.Sprite).spriteFrame = this.switchOpen;
                }
                else {
                    other.node.getComponent(cc.Sprite).spriteFrame = this.switchClose;
                }
            }
            else if (tag == 3) {
                if (cc.find("bag").getComponent("bagEvent").findSplinter()) {
                    // this.node.getComponent(cc.Sprite).spriteFrame = null;
                }

            }
        }
        else if (other.node.group == "jump_door") {
            this.setMoveX0();
            var tag = other.node.getComponent(cc.BoxCollider).tag;
            switch (tag) {
                case 11:
                case 12:
                case 13:
                    cc.director.loadScene("gameScene2", function () {
                        cc.find("characters").getComponent("characters").setPlayerPosition(tag);
                    });
                    break;
                case 15:
                    cc.director.loadScene("gameScene3", function () {
                        cc.find("characters").getComponent("characters").setPlayerPosition(tag);
                    });
                    break;
                case 16:    //结束游戏
                    uiManager.openUI("end");
                    break;
                case 21:
                case 22:
                case 23:                      //场景三开启后，选择是否销毁绿门
                    cc.director.loadScene("gameScene1", function () {
                        cc.find("characters").getComponent("characters").setPlayerPosition(tag);
                    });
                    break;
                case 24:
                    cc.director.loadScene("gameScene3", function () {
                        cc.find("characters").getComponent("characters").setPlayerPosition(tag);
                    });
                    break;
                case 31:
                    cc.director.loadScene("gameScene2", function () {
                        cc.find("characters").getComponent("characters").setPlayerPosition(tag);
                    });
                    break;
                case 32:
                    cc.director.loadScene("gameScene1", function () {
                        cc.find("characters").getComponent("characters").setPlayerPosition(tag);
                    });
                    break;
                case 33:
                    if (player.play.showsmallActive() == false) {   //为大角色时触发
                        if (cc.find("bag").getComponent("bagEvent").findSplinter()) {
                            player.play.setsmallActive();
                            this.initCharactersActive();
                            cc.find("bag").getComponent("bagEvent").deleetSplinter();
                        }
                    }
                case 34:
                    this.setPlayerPosition(tag);
                    break;
            }
        }
        else if (other.node.group == "dead") {
            if(this.dead==false){
                console.log("结束游戏");
                this.node.getComponent(cc.Animation).play("died");
                this.setMoveX0();
                cc.find("Canvas").getComponent("gameScene3").endGame();
                if(other.node.name=="saw"){
                    other.node.getComponent(cc.Animation).stop();
                    this.dead=true;
                }
            }
        }
        else if (other.node.group == "luodi") {
            this.setMoveXNum()
        }
    },
    setPlayerPosition(tag) {
        var position = mes.jumpDoor[Game.gameManager.getNextTag(tag)];
        this.node.setPosition(position);
        this.node.getComponent(cc.Animation).stop();
        if (player.play.showsmallActive()) {   //缩小状态
            this.node.getComponent(cc.Sprite).spriteFrame = this.Scharacters;
        }
        else {
            this.node.getComponent(cc.Sprite).spriteFrame = this.Bcharacters;
        }
        console.log(this.moveX)
    },
    onCollisionStay: function (other, self) {
        if (other.node.group == "flower") {
            this.flowerNum++;
            if (this.flowerNum == 250) {
                other.node.destroy();
                player.map.deletegameScene2("flower");
            }
            console.log(this.flowerNum);
        }
    },
    onCollisionExit: function (other, self) {
        if (other.node.group == "flower") {
            this.flowerNum = 0;
        }
        if (other.node.group == "tool") {
            var tag = other.node.getComponent(cc.BoxCollider).tag
            if (tag == 3) {               //切换很奇怪
            }
        }
    },
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.group == "door") {
            uiManager.openUI("chooseDoor", function () {
                cc.find("Canvas").getComponent("gameScene1").setdoorName(otherCollider.node.parent.name);
            })
        }
    },

    setMoveX0: function () {
        this.moveX = 0;
    },
    setMoveXNum: function () {
        this.moveX = 30;
    },
    /**
     * 初始化按钮
     * @param btnPath
     */
    onBtnHandler: function (btnPath) {
        let btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, 'game', 'onBtnClick');
    },
});
