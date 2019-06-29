var player = require("first");
var _i18n = require('LanguageData');
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        if(i18n.curLang){
            _i18n.init(i18n.curLang);
            _i18n.updateSceneRenderers();
        }
        else{
            _i18n.init("Chinese");
            _i18n.updateSceneRenderers();
        }
        this.node.getComponent(cc.Animation).play()
    },


    btn_newGame() {
        if (Game.gameManager.judge_newGame) {         //第一次新游戏
            this.activeBtnName();
            this.node.getChildByName("background").getComponent(cc.Animation).play("bgIn");
            this.scheduleOnce(function () {
                uiManager.openUI("choose_letter", function (obj) {
                    obj.getComponent(cc.Animation).play();
                    obj.getChildByName("name2").active = false;
                    uiManager.addClickEvent(obj.getChildByName("letter_agree"), cc.find("Canvas"), 'main', 'onBtnClick');
                    uiManager.addClickEvent(obj.getChildByName("letter_deny"), cc.find("Canvas"), 'main', 'onBtnClick');
                })
            }, 1)
        }
        else {
            uiManager.openUI("choose_newGame", function (obj) {
                uiManager.addClickEvent(obj.getChildByName("newGame_determined"), cc.find("Canvas"), 'main', 'onBtnClick');
                uiManager.addClickEvent(obj.getChildByName("newGame_cancel"), cc.find("Canvas"), 'main', 'onBtnClick');
            })
        }
    },

    btn_continueGame() {
        this.activeBtnName();
        this.node.getChildByName("background").getComponent(cc.Animation).play("bgIn")
        this.scheduleOnce(function () {
            uiManager.openUI("choose_letter", function (obj) {
                obj.getComponent(cc.Animation).play();
                obj.getChildByName("name2").active = true;
                uiManager.addClickEvent(obj.getChildByName("letter_agree"), cc.find("Canvas"), 'main', 'onBtnClick');
                obj.getChildByName("letter_deny").getComponent(cc.Button).interactable = false;
            })
        }, 1)
    },
    btn_selectGame() {
        cc.find("Canvas/choose_selectGame").active=true;
        cc.find("Canvas/choose_selectGame/slider").getComponent(cc.Slider).progress=Game.gameManager.voiceNum;
    },
    btn_exitSelect(){
        cc.find("Canvas/choose_selectGame").active=false;
    },
    btn_slider(){
        var num=cc.find("Canvas/choose_selectGame/slider").getComponent(cc.Slider).progress;
        cc.find("gameManager").getComponent(cc.AudioSource).volume=num;
        Game.gameManager.voiceNum=num;
    },
    btn_gameAll() {
        cc.director.loadScene("gameAll", function () {
            Game.gameManager.initOtherScene();
        });
    },
    activeBtnName() {
        this.node.getChildByName("name").active = !this.node.getChildByName("name").active;
        this.node.getChildByName("newGame").active = !this.node.getChildByName("newGame").active;
        this.node.getChildByName("continueGame").active = !this.node.getChildByName("continueGame").active;
        this.node.getChildByName("selectGame").active = !this.node.getChildByName("selectGame").active;
        this.node.getChildByName("gameAll").active = !this.node.getChildByName("gameAll").active;
    },

    onBtnClick: function (event) {
        switch (event.target.name) {
            case 'letter_agree':
                this.node.getChildByName("continueGame").getComponent(cc.Button).interactable = true;    //解除禁用button
                cc.director.loadScene("gameScene1", function () {
                    Game.gameManager.initGameScene();
                    Game.gameManager.initOtherScene();
                    Game.gameManager.onTouch();
                });
                break;
            case 'letter_deny':
                // this.node.getChildByName("continueGame").getComponent(cc.Button).interactable = true;    //解除禁用button
                cc.find("choose_letter").destroy();
                this.node.getChildByName("background").getComponent(cc.Animation).play("bgOut");
                this.scheduleOnce(function () {
                    cc.find("Canvas").getComponent("main").activeBtnName();
                }, 1)
                break;
            case "newGame_determined":   //清空数据
            Game.gameManager.initGameMes();
            this.node.getChildByName("continueGame").getComponent(cc.Button).interactable = false;    //解除禁用button
            case "newGame_cancel":
                cc.find("choose_newGame").destroy();
                break;
            default:
                break;
        }
    },

    btn_Chinese(){
        _i18n.init("Chinese");
        _i18n.updateSceneRenderers();
    },
    btn_English(){
        _i18n.init("English");
        _i18n.updateSceneRenderers();
    }


});