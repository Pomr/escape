var third = require("first");
var Third = function () {
    module = this;
    //均为true存在场景中
    var gameScene1 = ["doorNull", "doorSheep", "doorRabbit", "hammer", "keySheep"];
    var gameScene2 = ["flower", "fence", "splinter1", "splinter2", "jumpDoor", "wallShu"];
    var gameScene3 = ["splinter3", "jumpMatrixDown"]

    module.showgameScene1Length = function () {
        return gameScene1.length;
    }
    module.showgameScene1 = function (i) {
        return gameScene1[i];
    }
    module.showgameScene1All = function () {
        return gameScene1;
    }
    module.deletegameScene1 = function (name) {
        var no = gameScene1.indexOf(name);
        if (no != -1) {
            gameScene1.splice(no, 1);
        }
        else {
            console.log("deleteErr")
        }
    }

    module.showgameScene2Length = function () {
        return gameScene2.length;
    }
    module.showgameScene2 = function (i) {
        return gameScene2[i];
    }
    module.showgameScene2All = function () {
        return gameScene2;
    }
    module.deletegameScene2 = function (name) {
        var no = gameScene2.indexOf(name);
        if (no != -1) {
            gameScene2.splice(no, 1);
        }
        else {
            console.log("deleteErr")
        }
    }

    module.showgameScene3Length = function () {
        return gameScene3.length;
    }
    module.showgameScene3 = function (i) {
        return gameScene3[i];
    }
    module.showgameScene3All = function () {
        return gameScene3;
    }
    module.deletegameScene3 = function (name) {
        var no = gameScene3.indexOf(name);
        if (no != -1) {
            gameScene3.splice(no, 1);
        }
        else {
            console.log("deleteErr")
        }
    }
    module.init = function () {
        gameScene1 = ["doorNull", "doorSheep", "doorRabbit", "hammer", "keySheep"];
        gameScene2 = ["flower", "fence", "splinter1", "splinter2", "jumpDoor", "wallShu"];
        gameScene3 = ["splinter3", "jumpMatrixDown"]
    }

}
third.map = new Third();