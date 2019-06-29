var second = require("first");
var Second = function () {
    module = this;
    // var position = null;
    var sheepKey = false;     ///true 存在背包
    var rabbitKey = false;
    var hammer = false;          //锤子
    var splinter = [];                    //碎片数组
    var smallActive = false;                 //大小状态
    // module.setposition = function (pos) {
    //     position = pos;
    // }
    // module.showposition = function () {
    //     return position;
    // }
    module.showsheepKey = function () {
        return sheepKey;
    }
    module.setsheepKey = function () {
        sheepKey = !sheepKey;
    }
    module.showrabbitKey = function () {
        return rabbitKey;
    }
    module.setrabbitKey = function () {
        rabbitKey = !rabbitKey;
    }
    module.showsplinter = function () {
        return splinter;
    }
    module.addsplinter = function (no) {
        splinter.push(no);
        splinter.sort();
    }
    module.sethammer = function () {
        hammer = !hammer;
    }
    module.showhammer = function () {
        return hammer;
    }
    module.showsmallActive = function () {
        return smallActive;
    }
    module.setsmallActive = function () {
        smallActive = !smallActive;
    }
    module.init=function(){
        sheepKey = false;     ///true 存在背包
        rabbitKey = false;
        hammer = false;          //锤子
        splinter = [];                    //碎片数组
        smallActive = false;
    }
}
second.play = new Second();
