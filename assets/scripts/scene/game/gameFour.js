cc.Class({
    extends: cc.Component,

    properties: {
        prefab_gemstone: cc.Prefab,
    },

    onLoad () {
        this.list=[];
        this.listCorrect=[101,102,105,107,108,111,202,205,208,211,301,302,304,305,308,310,311,402,405,408,411,502,504,505,507,508,511];
        var clickEventHandler=new cc.Component.EventHandler();
        clickEventHandler.target=this.node;
        clickEventHandler.component="gameFour";
        clickEventHandler.handler="btn_gemstone";
        for (var i = 1; i < 6; i++) {
            for (var j = 1; j < 12; j++) {
                var gemstone=cc.instantiate(this.prefab_gemstone);
                this.node.getChildByName("bg").addChild(gemstone);
                var num=i*100+j;
                gemstone.name=num.toString();
                gemstone.getComponent(cc.Button).clickEvents.push(clickEventHandler);
            }
        }
    },

    btn_gemstone:function(event){
        event.target.getChildByName("gemstone").active=!event.target.getChildByName("gemstone").active;
        if(event.target.getChildByName("gemstone").active){
            this.list.push(parseInt(event.target.name));   //string转为int型
            if(this.list.length==this.listCorrect.length){
                this.check();
            }
        }
        else{
            this.list.splice(this.list.indexOf(parseInt(event.target.name)),1);
        }
        console.log(this.list);
    },
    check(){
        this.list.sort();
        if(this.list.toString()==this.listCorrect.toString()){  //不加toString()比较的是是否是同一个实例
            console.log("成功")
            cc.find("Canvas/gameFour").destroy();
            Game.gameManager.sceneName="gameAll";
        }
        else{
            console.log("错误")
        }
    }

    // update (dt) {},
});
