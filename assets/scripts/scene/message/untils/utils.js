let utils = {
    // /**
    //  * 加载资源    
    //  * @param {String} imagUrl 相对resources下的路径
    //  * @param {Number} type 加载资源类型
    //  * @param {*} callback 加载之后回调
    //  */
    // loadRes(imagUrl, type, callback) {
    //     cc.loader.loadRes(imagUrl, type, function (err, obj) {
    //         //String目标资源的URL; 功能如果提供此参数，则仅加载类型的资产; 函数回调在加载资源时调用(错误信息加载成功，如果可以找到加载的资源，均返回null)
    //         if (err) {
    //             cc.error(err.message || err);
    //             return;
    //         }
    //         typeof callback == 'function' && callback(obj);
    //     })
    // },



    // /**
    //  * 点击事件    
    //  * @param node
    //  * @param target
    //  * @param component
    //  * @param handler
    //  */
    // addClickEvent(node, target, component, handler) {
    //     let eventHandler = new cc.Component.EventHandler();
    //     eventHandler.target = target;
    //     eventHandler.component = component;
    //     eventHandler.handler = handler;

    //     let clickEvents = node.getComponent(cc.Button).clickEvents;
    //     clickEvents.push(eventHandler);
    // },






    // /**
    //  * 提示消息    ***
    //  * @param text
    //  */
    // showTips(text) {
    //     this.loadRes('prefab/tips', cc.Prefab, (obj) => {
    //         let node = cc.instantiate(obj);
    //         node.parent = cc.find('Canvas');
    //         node.zIndex = 1000;
    //         node.setPosition(0, 0);

    //         let msg = node.getChildByName('msg');
    //         msg.getComponent(cc.Label).string = text;

    //         let movetime = 1.5;
    //         let dis = 70;
    //         let action1 = cc.moveBy(movetime, cc.v2(0, dis));
    //         let action2 = cc.fadeOut(1);
    //         node.runAction(cc.sequence(action1, action2, cc.callFunc(() => {
    //             node.destroy();
    //         })))
    //     })
    // },
    // /**
    //  * 显示加载  
    //  * @param text
    //  * @param timeout
    //  */
    // showLoading(text, timeout = 0) {
    //     let loading = cc.find('Canvas/loading');
    //     if (loading) {
    //         return;
    //     }
    //     this.loadRes('prefab/loading', cc.Prefab, (obj) => {
    //         let node = cc.instantiate(obj);
    //         node.zIndex = 10000;     //zIndex 对节点进行排序 数值更高排在越后面
    //         node.setPosition(0, 0);
    //         let msg = cc.find('bg/msg', node);
    //         msg.getComponent(cc.Label).string = text;
    //         cc.find('Canvas').addChild(node);
    //         if (timeout > 0) {
    //             setTimeout(() => {
    //                 this.hideLoading();
    //             }, timeout)
    //         }
    //     })
    // },
    // /**
    //  * 隐藏加载  
    //  */
    // hideLoading(){
    //     let node=cc.find('Canvas').getChildByName('loading');
    //     if(!node){
    //         return;
    //     }
    //     node.destroy();
    // },
    // /**
    //  * 把一个节点的本地坐标转到另一个节点的本地坐标下   ***
    //  * @param {*} node
    //  * @param {*} targetNode
    //  */
    // convetOtherNodeSpaceAR(node,targetNode){
    //     if(!node||targetNode){
    //         return null;
    //     }
    //     //先转成世界坐标
    //     let worldPoint=node.convertToWorldSpaceAR(cc.v2(0,0));
    //     return targetNode.convertToNodeSpace(worldPoint);
    // },
    // /**
    //  * 加载远程图片  ***
    //  * @param {*} container
    //  * @param {*} url
    //  */
    // loadImg(container,url){
    //     if(!container||!url){
    //         return;
    //     }
    //     cc.loader.load(url,function(err,texture){
    //         if(err){
    //             cc.log(err);
    //             return;
    //         }
    //         var sprite=new cc.SpriteFrame(texture);
    //         container.spriteFrame=sprite;
    //     })
    // },
}
module.exports=utils;