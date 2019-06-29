var player = require("first");
cc.Class({
    extends: cc.Component,

    properties: {
        prefab_gemstone: cc.Prefab,

    },

    onLoad() {
        this.list = [];
        this.listCorrect = [11, 14, 15, 21, 22, 23, 24, 32, 34, 42, 43, 44, 45, 51, 52, 55];
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "gameThree";
        clickEventHandler.handler = "btn_gemstone";
        for (var i = 1; i < 6; i++) {
            for (var j = 1; j < 6; j++) {
                var gemstone = cc.instantiate(this.prefab_gemstone);
                this.node.getChildByName("bg").addChild(gemstone);
                var num = i * 10 + j;
                gemstone.name = num.toString();
                // gemstone.on('click',this.btn_gemstone,this);
                gemstone.getComponent(cc.Button).clickEvents.push(clickEventHandler);
            }
        }
    },

    btn_gemstone: function (event) {
        event.target.getChildByName("gemstone").active = !event.target.getChildByName("gemstone").active;
        if (event.target.getChildByName("gemstone").active) {
            this.list.push(parseInt(event.target.name));   //string转为int型
            if (this.list.length == this.listCorrect.length) {
                this.check();
            }
        }
        else {
            this.list.splice(this.list.indexOf(parseInt(event.target.name)), 1);
        }
    },
    check() {
        this.list.sort();
        if (this.list.toString() == this.listCorrect.toString()) {  //不加toString()比较的是是否是同一个实例
            if (Game.gameManager.gameStart) {
                cc.find("Canvas/splinter/splinter2").destroy();
                cc.find("bag").getComponent("bagEvent").addSplinter(2);
                player.map.deletegameScene2("splinter2");
                this.node.destroy();
            }
            else {
                cc.find("Canvas/gameThree").destroy();
                Game.gameManager.sceneName="gameAll";
            }
        }
        else {
            console.log("错误")
        }
    }

    // update (dt) {},
});
