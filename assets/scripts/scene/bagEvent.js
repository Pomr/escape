var player = require("first");
cc.Class({
    extends: cc.Component,

    properties: {
        node_bagList: cc.Node,
        prefab_bagKey: cc.Prefab,
        sheep: cc.SpriteFrame,
        rabbit: cc.SpriteFrame,
        prefab_splinter: cc.Prefab,
        prefab_hammer: cc.Prefab,
        hammerCheck: cc.SpriteFrame,
        hammer: cc.SpriteFrame,
        bagOne: cc.Prefab,
    },

    onLoad() {
        cc.game.addPersistRootNode(this.node)
        this.bagList = [];
        this.touch = false;
        this.hammerOpen = false;
        this.initBag();
    },
    initBag() {
        if (player.play.showhammer()) {
            this.addHammer();
        }
        if (player.play.showsheepKey()) {
            this.addkey("sheepKey");
        }
        if (player.play.showrabbitKey()) {
            this.addkey("rabbitKey");
        }
        if (player.play.showsplinter().length > 0) {
            for (var i = 0; i < player.play.showsplinter().length; i++) {
                if (player.play.showsplinter()[i] == "splinter1") {
                    this.addSplinter(1);
                }
                else if (player.play.showsplinter()[i] == "splinter2") {
                    this.addSplinter(2);
                }
                else if (player.play.showsplinter()[i] == "splinter3") {
                    this.addSplinter(3);
                }
            }

        }
    },
    findKey() {
        var key1 = this.bagList.indexOf("sheepKey");
        var key2 = this.bagList.indexOf("rabbitKey");
        return key1 != -1 || key2 != -1;
    },
    findSplinter() {
        var s1 = this.bagList.indexOf("splinter1");
        var s2 = this.bagList.indexOf("splinter2");
        var s3 = this.bagList.indexOf("splinter3");
        return s1 != -1 && s2 != -1 && s3 != -1
    },

    addkey: function (name) {
        var bagKey = cc.instantiate(this.prefab_bagKey);
        this.node_bagList.children[this.bagList.length].addChild(bagKey);
        if (name == "sheepKey") {
            bagKey.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = this.sheep;
            bagKey.getChildByName("animal").width = 40;
            bagKey.getChildByName("animal").height = 30;
            bagKey.getChildByName("animal").name = "sheep";
            player.play.setsheepKey();
        }
        else if (name == "rabbitKey") {
            bagKey.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = this.rabbit;
            bagKey.getChildByName("animal").width = 30;
            bagKey.getChildByName("animal").height = 30;
            bagKey.getChildByName("animal").name = "rabbit";
            player.play.setrabbitKey();
        }
        this.addbagList(name);
        this.onBtnHandler("bag/view/content/" + this.bagList.length.toString() + "/bagKey");   //不够严谨
    },

    addSplinter: function (num) {
        var splinter = cc.instantiate(this.prefab_splinter);
        this.node_bagList.children[this.bagList.length].addChild(splinter);
        splinter.getChildByName("num").getComponent(cc.Label).string = num;
        var name = "splinter" + num;
        this.addbagList(name);
        player.play.addsplinter(num);
    },
    addHammer() {
        var hammer = cc.instantiate(this.prefab_hammer);
        this.node_bagList.children[this.bagList.length].addChild(hammer);
        var name = "hammer";
        this.addbagList(name);
        this.onBtnHandler("bag/view/content/" + this.bagList.length.toString() + "/bagHammer");
        player.play.sethammer();
    },
    btnkey: function (event) {
        if (this.touch && this.findKey()) {
            this.settouch();
            console.log(this.bagList);
            if (event.target.children[0].name == "sheep") {
                this.checkCloseDoor("sheepKey", event.target);
            }
            else if (event.target.children[0].name == "rabbit") {
                this.checkCloseDoor("rabbitKey", event.target);
            }
            console.log(this.bagList);
        }
    },
    addNewBagOne() {
        var bagOne = cc.instantiate(this.bagOne);
        this.node_bagList.addChild(bagOne);
    },
    checkCloseDoor(keyName, node) {
        var gameSceneJs = cc.find("Canvas").getComponent("gameScene1")
        if (gameSceneJs.doorName == "doorNull") {
            this.bagList.splice(this.bagList.indexOf(keyName), 1);
            gameSceneJs.moveDoor();
            gameSceneJs.doorCancel();
            node.parent.destroy();
            this.addNewBagOne()
        }
        else if (gameSceneJs.doorName == "doorSheep") {
            if (keyName == "sheepKey") {
                this.bagList.splice(this.bagList.indexOf("sheepKey"), 1);  //起始下标，长度
                gameSceneJs.moveDoor();
                gameSceneJs.doorCancel();
                node.parent.destroy();
                this.addNewBagOne();
            }
            else {
                gameSceneJs.doorCancel();
                uiManager.openUI("tip", function (obj) {
                    obj.getComponent("tip").setData(1);
                })
            }
        }
        else if (gameSceneJs.doorName == "doorRabbit") {
            if (keyName == "rabbitKey") {
                this.bagList.splice(this.bagList.indexOf("rabbitKey"), 1);  //起始下标，长度
                gameSceneJs.moveDoor();
                gameSceneJs.doorCancel();
                node.parent.destroy();
                this.addNewBagOne();
            }
            else {
                gameSceneJs.doorCancel();
                uiManager.openUI("tip", function (obj) {
                    obj.getComponent("tip").setData(1);
                })
            }
        }
    },
    btnHammer(event) {
        this.hammerOpen = !this.hammerOpen
        if (this.showHammerOpen()) {
            // event.target.getComponent(cc.Sprite).spriteFrame = this.hammerCheck;
            event.target.getComponent(cc.Animation).play();
        } else {
            var num = this.bagList.indexOf("hammer") + 1;
            cc.find("bag/view/content/" + num.toString() + "/bagHammer").getComponent(cc.Animation).stop()
            cc.find("bag/view/content/" + num.toString() + "/bagHammer").rotation = 0;
        }
    },
    deleetSplinter() {
        //删除显示层的3个
        cc.find("bag/view/content/" + (this.bagList.indexOf("splinter1") + 1).toString()).destroy();
        cc.find("bag/view/content/" + (this.bagList.indexOf("splinter2") + 1).toString()).destroy();
        cc.find("bag/view/content/" + (this.bagList.indexOf("splinter3") + 1).toString()).destroy();
        this.bagList.indexOf("splinter1")
        //删除背包里的3个
        this.bagList.splice(this.bagList.indexOf("splinter1"), 1);
        this.bagList.splice(this.bagList.indexOf("splinter2"), 1);
        this.bagList.splice(this.bagList.indexOf("splinter3"), 1);

    },
    showHammerOpen() {
        return this.hammerOpen;
    },
    addbagList: function (name) {
        this.bagList.push(name);
    },
    settouch: function () {
        this.touch = !this.touch;
    },
    /**
     * 初始化按钮
     * @param btnPath
     */
    onBtnHandler: function (btnPath) {
        let btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, 'bagEvent', 'onBtnClick');
    },
    /**
    * 按钮点击事件
    * @param event
    */
    onBtnClick: function (event) {
        switch (event.target.name) {
            case 'bagKey':
                this.btnkey(event);
                break;
            case 'bagHammer':
                this.btnHammer(event);
                break;
            default:
                break;
        }
    },
    // update (dt) {},
});
