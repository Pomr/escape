var player = require("first");
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.node_1 = false;
        this.node_2 = false;
        this.node_3 = false;
    },

    btn_red: function () {
        this.node.getChildByName("1").getChildByName("kuai").active = false;
        this.node_1 = false;
        this.node.getChildByName("3").getChildByName("kuai").active = false;
        this.node_3 = false;
    },
    btn_green: function () {
        this.selectNode_1();
        this.selectNode_2();
        this.check();
    },
    btn_blue: function () {
        this.selectNode_2();
        this.selectNode_3();
        this.check();
    },
    selectNode_1: function () {
        this.node.getChildByName("1").getChildByName("kuai").active = !this.node.getChildByName("1").getChildByName("kuai").active;
        this.node_1 = !this.node_1;
    },
    selectNode_2: function () {
        this.node.getChildByName("2").getChildByName("kuai").active = !this.node.getChildByName("2").getChildByName("kuai").active;
        this.node_2 = !this.node_2;
    },
    selectNode_3: function () {
        this.node.getChildByName("3").getChildByName("kuai").active = !this.node.getChildByName("3").getChildByName("kuai").active;
        this.node_3 = !this.node_3;
    },
    check: function () {
        if (this.node_1 && this.node_2 && this.node_3) {
            if (Game.gameManager.gameStart) {
                cc.find("Canvas/splinter/splinter1").destroy();
                cc.find("bag").getComponent("bagEvent").addSplinter(1);
                player.map.deletegameScene2("splinter1");
                this.node.destroy();
            }
            else{
                cc.find("Canvas/gameOne").destroy();
                Game.gameManager.sceneName="gameAll";
            }  
        }
    },

    start() {

    },

    // update (dt) {},
});
