var mes = require("mes")
cc.Class({
    extends: cc.Component,

    properties: {
        true: cc.SpriteFrame,
        prefab_false: cc.Prefab,
        all:10,
    },

    onLoad() {
        this.node.x = 1280 / 2;
        this.node.y = 720 / 2;
        // this.all = 10;
        this.now = 0;
        this.wrongNum = 0;
        this.scheduleOnce(function () {
            this.node.getChildByName("start").destroy();
        }, 2)
        this.node.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = this.now / this.all;
        this.init();
    },
    init() {
        if(Game.gameManager.gameStart){
            this.onBtnHandler('gameFindDiff/01/01');
            this.onBtnHandler('gameFindDiff/01/02');
            this.onBtnHandler('gameFindDiff/02/01');
            this.onBtnHandler('gameFindDiff/02/02');
            this.onBtnHandler('gameFindDiff/03/01');
            this.onBtnHandler('gameFindDiff/03/02');
            this.onBtnHandler('gameFindDiff/04/01');
            this.onBtnHandler('gameFindDiff/04/02');
            this.onBtnHandler('gameFindDiff/05/01');
            this.onBtnHandler('gameFindDiff/05/02');
            this.onBtnHandler('gameFindDiff/06/01');
            this.onBtnHandler('gameFindDiff/06/02');
            this.onBtnHandler('gameFindDiff/07/01');
            this.onBtnHandler('gameFindDiff/07/02');
            this.onBtnHandler('gameFindDiff/08/01');
            this.onBtnHandler('gameFindDiff/08/02');
            this.onBtnHandler('gameFindDiff/09/01');
            this.onBtnHandler('gameFindDiff/09/02');
            this.onBtnHandler('gameFindDiff/10/01');
            this.onBtnHandler('gameFindDiff/10/02');
            this.onBtnHandler('gameFindDiff/11/01');
            this.onBtnHandler('gameFindDiff/11/02');
            this.onBtnHandler('gameFindDiff/12/01');
            this.onBtnHandler('gameFindDiff/12/02');
            this.onBtnHandler('gameFindDiff/left');
            this.onBtnHandler('gameFindDiff/right');
        }
        else{
            this.onBtnHandler('Canvas/gameFindDiff/01/01');
            this.onBtnHandler('Canvas/gameFindDiff/01/02');
            this.onBtnHandler('Canvas/gameFindDiff/02/01');
            this.onBtnHandler('Canvas/gameFindDiff/02/02');
            this.onBtnHandler('Canvas/gameFindDiff/03/01');
            this.onBtnHandler('Canvas/gameFindDiff/03/02');
            this.onBtnHandler('Canvas/gameFindDiff/04/01');
            this.onBtnHandler('Canvas/gameFindDiff/04/02');
            this.onBtnHandler('Canvas/gameFindDiff/05/01');
            this.onBtnHandler('Canvas/gameFindDiff/05/02');
            this.onBtnHandler('Canvas/gameFindDiff/06/01');
            this.onBtnHandler('Canvas/gameFindDiff/06/02');
            this.onBtnHandler('Canvas/gameFindDiff/07/01');
            this.onBtnHandler('Canvas/gameFindDiff/07/02');
            this.onBtnHandler('Canvas/gameFindDiff/08/01');
            this.onBtnHandler('Canvas/gameFindDiff/08/02');
            this.onBtnHandler('Canvas/gameFindDiff/09/01');
            this.onBtnHandler('Canvas/gameFindDiff/09/02');
            this.onBtnHandler('Canvas/gameFindDiff/10/01');
            this.onBtnHandler('Canvas/gameFindDiff/10/02');
            this.onBtnHandler('Canvas/gameFindDiff/11/01');
            this.onBtnHandler('Canvas/gameFindDiff/11/02');
            this.onBtnHandler('Canvas/gameFindDiff/12/01');
            this.onBtnHandler('Canvas/gameFindDiff/12/02');
            this.onBtnHandler('Canvas/gameFindDiff/left');
            this.onBtnHandler('Canvas/gameFindDiff/right');

        }
    },

    btn_true: function (event) {
        this.now++;
        var node_diff0 = event.target.parent.children[0];
        var node_diff1 = event.target.parent.children[1];
        node_diff0.removeComponent(cc.Button);
        node_diff1.removeComponent(cc.Button);
        node_diff0.getComponent(cc.Sprite).spriteFrame = this.true;
        node_diff0.width = 50;
        node_diff0.height = 50;
        node_diff1.getComponent(cc.Sprite).spriteFrame = this.true;
        node_diff1.width = 50;
        node_diff1.height = 50;
        this.node.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = this.now / this.all;
        if (this.now == this.all) {
            if (Game.gameManager.gameStart) {
                var chest = cc.find("Canvas/chest");
                chest.getComponent(cc.Sprite).spriteFrame = Game.gameManager.chest_open;
                chest.removeComponent(cc.BoxCollider);
                mes.chest = true;
                cc.find("bag").getComponent("bagEvent").addkey("rabbitKey");
                this.node.destroy();
            }
            else{
                cc.find("Canvas/gameFindDiff").destroy();
                Game.gameManager.sceneName="gameAll";
            }
            
        }
    },

    btn_false: function (event) {
        this.wrongNum++;
        var wrong = cc.instantiate(this.prefab_false);
        event.target.addChild(wrong);
        if (event.target.name == "left") {
            var pos = this.node.getChildByName("left").convertToNodeSpaceAR(cc.v2(event.touch.getLocationX(), event.touch.getLocationY()));
        }
        else if (event.target.name == "right") {
            var pos = this.node.getChildByName("right").convertToNodeSpaceAR(cc.v2(event.touch.getLocationX(), event.touch.getLocationY()));
        }
        wrong.setPosition(pos.x, pos.y);
        this.scheduleOnce(function () {
            wrong.destroy();
        }, 2)
        if (this.wrongNum >= 5) {
            this.wrongNum = 0;
            this.node.getChildByName("wait").active = true;
            this.scheduleOnce(function () {
                this.node.getChildByName("wait").active = false;
            }, 5)
        }
    },
    /**
     * 初始化按钮
     * @param btnPath
     */
    onBtnHandler: function (btnPath) {
        let btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, 'gameFindDiff', 'onBtnClick');
    },
    /**
    * 按钮点击事件
    * @param event
    */
    onBtnClick: function (event) {
        switch (event.target.name) {
            case '01':
            case '02':
                this.btn_true(event);
                break;
            case 'left':
            case 'right':
                this.btn_false(event);
                break;
            default:
                break;
        }
    },

    start() {

    },

    // update (dt) {},
});
