var player = require("first");
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.change = false;
        this.num = 0;
        this.scaleNum = 1;
        this.schedule(function () {
            this.num++;
            if (this.num >= 10) {
                this.change = true;
            }
        }, 1)
    },

    btn: function () {
        this.num = 0;
        this.change = false;
        this.node.getChildByName("Maskyellow").setScale(1);
    },

    update(dt) {
        if (this.change) {
            this.scaleNum += 0.1;
            this.node.getChildByName("Maskyellow").setScale(this.scaleNum);
            console.log(this.scaleNum)
            if (this.scaleNum >= 30) {
                this.change=false;
                if (Game.gameManager.gameStart) {
                    console.log("成功");
                    cc.find("Canvas/splinter1").destroy();
                    cc.find("bag").getComponent("bagEvent").addSplinter(3);
                    player.map.deletegameScene3("splinter3");
                    cc.find("Canvas/wallAll/run").getComponent("moveWall").setSpeedMove();
                    this.node.destroy();
                }
                else{
                    cc.find("Canvas/gameFive").destroy();
                    this.sceneName = "gameAll";
                }
            }
        }
    },
});
