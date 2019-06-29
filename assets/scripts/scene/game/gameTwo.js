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
        if (this.node_1 == false && this.node_3) {
            this.selectNode_1();
            this.selectNode_3();
            this.check();
        }
        else if (this.node_3 == false && this.node_1) {
            this.selectNode_1();
            this.selectNode_3();
            this.check();
        }
    },
    btn_green: function () {
        this.node.getChildByName("3").getChildByName("kuai").active = false;
        this.node_3 = false;
    },
    btn_blue: function () {
        this.selectNode_1();
        this.selectNode_2();
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
            cc.find("Canvas/gameTwo").destroy();
            Game.gameManager.sceneName="gameAll";
        }
    },

    // update (dt) {},
});
