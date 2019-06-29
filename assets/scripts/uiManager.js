window.uiManager = {
};

uiManager.openUI = function (uiName, callBack) {
    cc.loader.loadRes('prefab/' + uiName, function (err, prefab) {
        if (err) {
            cc.error(err.message || err);
            return;
        }
        var node = cc.instantiate(prefab);
        node.parent = cc.Canvas.instance.node.parent;
        // event--
        if (callBack) {
            callBack(node);
        }
    });
};
uiManager.createMapUI = function (uiName, callBack) {
    cc.loader.loadRes('prefab/map/' + uiName, function (err, prefab) {
        if (err) {
            cc.error(err.message || err);
            return;
        }
        var node = cc.instantiate(prefab);
        
        if (callBack) {
            callBack(node);
        }
    });
};
uiManager.creategame = function (uiName, callBack) {
    cc.loader.loadRes('prefab/' + uiName, function (err, prefab) {
        if (err) {
            cc.error(err.message || err);
            return;
        }
        var node = cc.instantiate(prefab);
        node.parent = cc.find("Canvas");
        node.x=0;
        node.y=0;
        if (callBack) {
            callBack(node);
        }
    });
};

/**
 * 点击事件    
 * @param node
 * @param target
 * @param component
 * @param handler
 */
uiManager.addClickEvent = function (node, target, component, handler) {
    let eventHandler = new cc.Component.EventHandler();
    eventHandler.target = target;
    eventHandler.component = component;
    eventHandler.handler = handler;

    let clickEvents = node.getComponent(cc.Button).clickEvents;
    clickEvents.push(eventHandler);
}