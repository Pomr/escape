cc.Class({
    extends: cc.Component,

    properties: {
        word:cc.Label,

    },

    // onLoad () {},

    setData(num) {
        this.node.getComponent(cc.Animation).play();
        this.node.getComponent(cc.Animation).on("finished",function(){
            cc.find("tip").destroy();
        })
        if (i18n.curLang == "Chinese") {
            if(num==1){
                this.word.string="选择的钥匙错误"
            }
            else if(num==2){
                this.word.dtring="背包中不存在钥匙"
            }
        }
        else {
            if(num==1){
                this.word.string="Error in key selection"
            }
            else if(num==2){
                this.word.dtring="There is no key in the backpack"
            }

        }
    }

    // update (dt) {},
});
