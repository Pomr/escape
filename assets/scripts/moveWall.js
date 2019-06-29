cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.speed = 0;
        this.number=0;
        this.characters = false;
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {

        if (otherCollider.node.group == "stand") {
            this.speed = selfCollider.node.getComponent(cc.RigidBody).linearVelocity
            this.speed.x = -this.speed.x;
            selfCollider.node.getComponent(cc.RigidBody).linearVelocity = this.speed;
            if (this.characters) {
                cc.find("characters").getComponent(cc.RigidBody).linearVelocity = this.speed;
            }
        }
        else if (otherCollider.node.group == "characters") {
            this.characters = true;
            otherCollider.node.getComponent("characters").moveC=15;

        }
    },
    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.group == "characters") {
            this.characters = false;
            cc.find("characters").getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        }
    },
    setSpeed0(){
        this.speed = this.node.getComponent(cc.RigidBody).linearVelocity;
        this.number=this.speed.x;
        this.speed.x = 0;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.speed;
    },
    setSpeedMove(){
        this.speed = this.node.getComponent(cc.RigidBody).linearVelocity;
        this.speed.x = this.number;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.speed;
        cc.find("characters").getComponent(cc.RigidBody).linearVelocity = this.speed;

    }

});
