cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.node.getChildByName("pwdAgain").active = false;    //默认登录界面
        let btn = cc.find(btnPath);
        uiManager.addClickEvent("Canvas/login/register", this.node, 'login', 'onBtnClick');
        uiManager.addClickEvent("Canvas/login/login", this.node, 'login', 'onBtnClick');
    },

    registerInit() {
        this.node.getChildByName("register").active = false;
        this.node.getChildByName("pwdAgain").active = true;
    },
    loginInit() {

    },

    onBtnClick: function (event) {
        switch (event.target.name) {
            case 'register':
                
                break;
            case 'login':
                
                break;
            default:
                break;
        }
    },

    // update (dt) {},
});
