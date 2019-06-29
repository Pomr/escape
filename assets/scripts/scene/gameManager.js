window.Game = {
    gameManager: null,
    mes: require("mes"),
    characters: null,           //未使用
}
var player = require("first");
cc.Class({
    extends: cc.Component,

    properties: {
        sheep: cc.SpriteFrame,
        rabbit: cc.SpriteFrame,
        chest_open: cc.SpriteFrame,
        voice_close: cc.SpriteFrame,
        voice_open: cc.SpriteFrame,
    },

    onLoad() {
        this.voiceNum = 1;
        this.sceneName = null;
        this.gameStart = false;
        this.touch = false;
        Game.gameManager = this;
        cc.game.addPersistRootNode(this.node);     //添加常驻节点，该节点不会在场景切换中被销毁
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();  //获取碰撞检测系统
        manager.enabled = true;                           //开启碰撞检测系统
        // manager.enabledDebugDraw = true;                  //debug绘制 显示碰撞组件的碰撞检测范围
        this.judge_newGame = true;     //游戏是否新游戏判断

    },
    onTouch() {
        this.node.getChildByName("left").on("touchstart", this.startMove, this)
        this.node.getChildByName("left").on("touchend", this.endMove, this);
        this.node.getChildByName("left").on("touchcancel", this.endMove, this);
        this.node.getChildByName("right").on("touchstart", this.startMove, this)
        this.node.getChildByName("right").on("touchend", this.endMove, this);
        this.node.getChildByName("right").on("touchcancel", this.endMove, this);
    },
    getNextTag(tag) {
        switch (tag) {
            case 11:
                return 21;
                break;
            case 12:
                return 22;
                break;
            case 13:
                return 23;
                break;
            case 15:  //场景3中间的紫色门
                return 32
                break;
            case 16:   //场景1的黄色小门
                return
                break;
            case 21:
                return 11;
                break;
            case 22:
                return 12;
                break;
            case 23:
                return 13;
                break;
            case 24:    //红色门
                return 31
                break;
            case 31:   //红色门
                return 24
                break;
            case 32:  //紫色门
                return 15
                break;
            case 33:
                return 34
                break;
            case 34:
                return 33
                break;
        }
    },
    startMove(event) {
        this.touch = true;
        this.keepMove(event.target.name)
    },
    keepMove(name) {
        if (this.touch) {
            cc.find("characters").getComponent("characters").move(name);
            this.scheduleOnce(function () {
                this.keepMove(name);
            }, 0.2)
        }
    },
    endMove() {
        this.touch = false;
    },

    initGameScene() {
        this.node.getChildByName("left").active = !this.node.getChildByName("left").active;
        this.node.getChildByName("right").active = !this.node.getChildByName("right").active;
        this.node.getChildByName("kuang").active = !this.node.getChildByName("kuang").active;
    },
    initOtherScene() {
        this.node.getChildByName("list").active = !this.node.getChildByName("list").active;
    },
    btn_list() {
        this.node.getChildByName("choose_list").active = !this.node.getChildByName("choose_list").active;
    },
    btn_return() {
        this.btn_list();
        switch (this.sceneName) {
            case "gameAll":
                this.sceneName = null;
                cc.director.loadScene("main", function (obj) {
                    if (Game.gameManager.judge_newGame == false) {
                        cc.find("Canvas/continueGame").getComponent(cc.Button).interactable = true;
                    }
                });
                this.initOtherScene();
                this.node.getChildByName("choose_list").active = false;
                break;
            case "gameScene1":
            case "gameScene2":
            case "gameScene3":
                cc.game.removePersistRootNode(cc.find("characters"));
                cc.game.removePersistRootNode(cc.find("bag"));
                this.sceneName = null;
                cc.director.loadScene("main", function (obj) {
                    if (Game.gameManager.judge_newGame == false) {
                        cc.find("Canvas/continueGame").getComponent(cc.Button).interactable = true;
                    }
                });
                this.initGameScene();
                this.initOtherScene();
                this.node.getChildByName("choose_list").active = false;
                break;
            case "gameOne":
            case "gameTwo":
            case "gameThree":
            case "gameFour":
            case "gameFive":
            case "gameFindDiff":
                cc.find("Canvas/" + this.sceneName).destroy();
                this.sceneName = "gameAll";
                break;

        }
    },
    btn_voice(event) {
        this.btn_list();
        if (this.node.getComponent(cc.AudioSource).volume == 0) {
            this.node.getComponent(cc.AudioSource).volume = this.voiceNum;
        }
        else {
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
    },
    initGameMes() {
        Game.mes.chest = false;
        Game.mes.switch = false;
        Game.mes.saw = true;
        Game.mes.switchBool = false;
        player.play.init();
        player.map.init();
        this.judge_newGame=true;
    }

});
