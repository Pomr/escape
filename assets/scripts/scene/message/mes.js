var obj = {
    jumpDoor: {
        11: cc.v2(980, 140), 12: cc.v2(745, 620), 13: cc.v2(390, 560), 15: cc.v2(980, 370),
        21: cc.v2(975, 475), 22: cc.v2(150, 150), 23: cc.v2(565, 150), 24: cc.v2(975, 150),
        31: cc.v2(160, 655), 32: cc.v2(510,435),33:null,34:cc.v2(155,435),
    },
    charactersInit:cc.v2(115,300),
    gameScene1: {
        doorNull: cc.v2(706, 145),
        doorSheep: cc.v2(840, 393),
        doorRabbit: cc.v2(359, 106),
        hammer: cc.v2(-330,-100),
        keySheep: cc.v2(-175, -260),
    },
    gameScene2:{
        flower:cc.v2(-378,7),
        splinter1:cc.v2(-588,100),
        splinter2:cc.v2(95,-245),
        fence:cc.v2(205,-180),
        jumpDoor:cc.v2(-170,-225),
        wallShu:cc.v2(-264,-180),
    },
    gameScene3:{
        splinter3:cc.v2(-152,-180),
        jumpMatrixDownTop:cc.v2(235,220),
        jumpMatrixDownLeft:cc.v2(-575,-165),
        jumpMatrixDownRight:cc.v2(430,-165),
    },
    chest:false,
    switch:false,
    saw:true,
    switchBool:false,



}
module.exports = obj;
// four.position = new Four();