cc.Class({
    extends: cc.Component,

    properties: {
        prefab_redOne: cc.Prefab,
    },

    onLoad() {
        this.listTop = [];
        this.listTopCorrect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        this.listBottom = [];
        this.listBottomCorrect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "game_six";
        clickEventHandler.handler = "btn_red";
        for (var i = 0; i < 25; i++) {
            var redOne = cc.instantiate(this.prefab_redOne);
            this.node.getChildByName("redTop").addChild(redOne);
            redOne.name = i.toString();
            redOne.getComponent(cc.Button).clickEvents.push(clickEventHandler);
        }
        for (var i = 0; i < 16; i++) {
            var redOne = cc.instantiate(this.prefab_redOne);
            this.node.getChildByName("redBottom").addChild(redOne);
            redOne.name = i.toString();
            redOne.getComponent(cc.Button).clickEvents.push(clickEventHandler);
        }
    },

    btn_red: function (event) {
        var name = event.target.name
        if (event.target.parent.name == "redTop") {
            if (name < 5) {
                event.target.getChildByName("red").active = true;
                this.listTop.push(parseInt(name));
            }
            else if (name > 4 && name < 12) {
                this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
                this.listBottom.push(parseInt(name - 5));
            }
            else if (name == 12) {
                this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
                this.node.getChildByName("redBottom").children[15].getChildByName("red").active = true;
                this.listBottom.push(parseInt(name));
                this.listBottom.push(15);
            }
            else if (name > 12 && name < 15) {
                this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
                this.listBottom.push(parseInt(name - 5));
            }
            else if (name > 14 && name < 21) {
                this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
                event.target.getChildByName("red").active = true;
                this.listBottom.push(parseInt(name - 5));
                this.listTop.push(parseInt(name));
            }
            else {
                event.target.getChildByName("red").active = true;
                this.listTop.push(parseInt(name));
            }
            // console.log("redTop"+name);
            console.log(this.listTop.sort());
            console.log(this.listBottom.sort());
        }
        else {
            if (name < 15) {
                this.node.getChildByName("redTop").children[name].getChildByName("red").active = true;
                this.listTop.push(parseInt(name));
            }
            // console.log("redBottom"+name);
            console.log(this.listTop.sort());
            console.log(this.listBottom.sort());
        }
        this.check();
    },

    check: function () {
        this.listBottom.sort();
        this.listTop.sort();
        if (this.listBottom.toString() == this.listBottomCorrect.toString() && this.listTop.toString() == this.listTopCorrect.toString()) {
            console.log("成功")
        }
        else {
            console.log("错误")
        }
    }
    // update (dt) {},
});
