window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Chinese: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "576292Op25BgYOXW6UUGBb1", "Chinese");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages["Chinese"] = {
      label: {
        newGame: "\u65b0\u6e38\u620f",
        continueGame: "\u7ee7\u7eed\u6e38\u620f",
        selectGame: "\u6e38\u620f\u8bbe\u7f6e",
        gameAll: "\u6e38\u620f\u96c6\u5408",
        Chinese: "\u4e2d\u6587",
        English: "\u82f1\u6587",
        volume: "\u97f3\u91cf",
        welcome: "\u6b22\u8fce\u60a8",
        join: "\u53c2\u52a0\u672c\u6b21\u9003\u8131\u6e38\u620f",
        agree: "\u540c\u610f",
        deny: "\u62d2\u7edd",
        new1: "\u662f\u5426\u5f00\u59cb\u65b0\u6e38\u620f\uff1f",
        new2: "\u8986\u76d6\u539f\u8fdb\u5ea6",
        determine: "\u786e\u5b9a",
        cancel: "\u53d6\u6d88",
        chooseDoor1: "\u662f\u5426\u4f7f\u7528\u94a5\u5319",
        chooseDoor2: "\u8bf7\u5728\u53f3\u4fa7\u9009\u62e9\u94a5\u5319",
        end: "\u606d\u559c\u901a\u5173",
        find10: "\u8bf7\u627e\u51fa\u56fe\u4e2d10\u5904\u4e0d\u540c",
        findWait: "\u8bf7\u7a0d\u540e",
        findDiff: "\u627e\u4e0d\u540c",
        endGame: "\u662f\u5426\u91cd\u65b0\u5f00\u59cb\u6e38\u620f\uff1f"
      }
    };
    cc._RF.pop();
  }, {} ],
  English: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbb30Chj9hEGqhxy0Dz8NHu", "English");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages["English"] = {
      label: {
        newGame: "New game",
        continueGame: "Continue the game",
        selectGame: "Game settings",
        gameAll: "Little game",
        Chinese: "Chinese",
        English: "English",
        volume: "volume",
        welcome: "Welcome",
        join: "Participate in this escape game",
        agree: "agree",
        deny: "deny",
        new1: "Do you want to start a new game?",
        new2: "Cover the original schedule",
        determine: "determine",
        cancel: "cancel",
        chooseDoor1: "Whether to use the key or not",
        chooseDoor2: "Please select the key on the right",
        end: "Congratulations on customs clearance",
        find10: "Please find 10 differences in the figure",
        findWait: "Please wait a moment",
        findDiff: "Find different",
        endGame: "Do you want to start the game again?"
      }
    };
    cc._RF.pop();
  }, {} ],
  LanguageData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
    "use strict";
    var Polyglot = require("polyglot.min");
    var polyInst = null;
    window.i18n || (window.i18n = {
      languages: {},
      curLang: ""
    });
    false;
    function loadLanguageData(language) {
      return window.i18n.languages[language];
    }
    function initPolyglot(data) {
      data && (polyInst ? polyInst.replace(data) : polyInst = new Polyglot({
        phrases: data,
        allowMissing: true
      }));
    }
    module.exports = {
      init: function init(language) {
        if (language === window.i18n.curLang) return;
        var data = loadLanguageData(language) || {};
        window.i18n.curLang = language;
        initPolyglot(data);
        this.inst = polyInst;
      },
      t: function t(key, opt) {
        if (polyInst) return polyInst.t(key, opt);
      },
      inst: polyInst,
      updateSceneRenderers: function updateSceneRenderers() {
        var rootNodes = cc.director.getScene().children;
        var allLocalizedLabels = [];
        for (var i = 0; i < rootNodes.length; ++i) {
          var labels = rootNodes[i].getComponentsInChildren("LocalizedLabel");
          Array.prototype.push.apply(allLocalizedLabels, labels);
        }
        for (var _i = 0; _i < allLocalizedLabels.length; ++_i) {
          var label = allLocalizedLabels[_i];
          if (!label.node.active) continue;
          label.updateLabel();
        }
        var allLocalizedSprites = [];
        for (var _i2 = 0; _i2 < rootNodes.length; ++_i2) {
          var sprites = rootNodes[_i2].getComponentsInChildren("LocalizedSprite");
          Array.prototype.push.apply(allLocalizedSprites, sprites);
        }
        for (var _i3 = 0; _i3 < allLocalizedSprites.length; ++_i3) {
          var sprite = allLocalizedSprites[_i3];
          if (!sprite.node.active) continue;
          sprite.updateSprite(window.i18n.curLang);
        }
      }
    };
    cc._RF.pop();
  }, {
    "polyglot.min": "polyglot.min"
  } ],
  LocalizedLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
    "use strict";
    var i18n = require("LanguageData");
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function later() {
          timeout = null;
          immediate || func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        callNow && func.apply(context, args);
      };
    }
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true,
        menu: "i18n/LocalizedLabel"
      },
      properties: {
        dataID: {
          get: function get() {
            return this._dataID;
          },
          set: function set(val) {
            if (this._dataID !== val) {
              this._dataID = val;
              false;
              this.updateLabel();
            }
          }
        },
        _dataID: ""
      },
      onLoad: function onLoad() {
        false;
        i18n.inst || i18n.init();
        this.fetchRender();
      },
      fetchRender: function fetchRender() {
        var label = this.getComponent(cc.Label);
        if (label) {
          this.label = label;
          this.updateLabel();
          return;
        }
      },
      updateLabel: function updateLabel() {
        if (!this.label) {
          cc.error("Failed to update localized label, label component is invalid!");
          return;
        }
        var localizedString = i18n.t(this.dataID);
        localizedString && (this.label.string = i18n.t(this.dataID));
      }
    });
    cc._RF.pop();
  }, {
    LanguageData: "LanguageData"
  } ],
  LocalizedSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
    "use strict";
    var SpriteFrameSet = require("SpriteFrameSet");
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true,
        inspector: "packages://i18n/inspector/localized-sprite.js",
        menu: "i18n/LocalizedSprite"
      },
      properties: {
        spriteFrameSet: {
          default: [],
          type: SpriteFrameSet
        }
      },
      onLoad: function onLoad() {
        this.fetchRender();
      },
      fetchRender: function fetchRender() {
        var sprite = this.getComponent(cc.Sprite);
        if (sprite) {
          this.sprite = sprite;
          this.updateSprite(window.i18n.curLang);
          return;
        }
      },
      getSpriteFrameByLang: function getSpriteFrameByLang(lang) {
        for (var i = 0; i < this.spriteFrameSet.length; ++i) if (this.spriteFrameSet[i].language === lang) return this.spriteFrameSet[i].spriteFrame;
      },
      updateSprite: function updateSprite(language) {
        if (!this.sprite) {
          cc.error("Failed to update localized sprite, sprite component is invalid!");
          return;
        }
        var spriteFrame = this.getSpriteFrameByLang(language);
        !spriteFrame && this.spriteFrameSet[0] && (spriteFrame = this.spriteFrameSet[0].spriteFrame);
        this.sprite.spriteFrame = spriteFrame;
      }
    });
    cc._RF.pop();
  }, {
    SpriteFrameSet: "SpriteFrameSet"
  } ],
  SpriteFrameSet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
    "use strict";
    var SpriteFrameSet = cc.Class({
      name: "SpriteFrameSet",
      properties: {
        language: "",
        spriteFrame: cc.SpriteFrame
      }
    });
    module.exports = SpriteFrameSet;
    cc._RF.pop();
  }, {} ],
  bagEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93284TVy8BD16sJMyJv0ybC", "bagEvent");
    "use strict";
    var player = require("first");
    cc.Class({
      extends: cc.Component,
      properties: {
        node_bagList: cc.Node,
        prefab_bagKey: cc.Prefab,
        sheep: cc.SpriteFrame,
        rabbit: cc.SpriteFrame,
        prefab_splinter: cc.Prefab,
        prefab_hammer: cc.Prefab,
        hammerCheck: cc.SpriteFrame,
        hammer: cc.SpriteFrame,
        bagOne: cc.Prefab
      },
      onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        this.bagList = [];
        this.touch = false;
        this.hammerOpen = false;
        this.initBag();
      },
      initBag: function initBag() {
        player.play.showhammer() && this.addHammer();
        player.play.showsheepKey() && this.addkey("sheepKey");
        player.play.showrabbitKey() && this.addkey("rabbitKey");
        if (player.play.showsplinter().length > 0) for (var i = 0; i < player.play.showsplinter().length; i++) "splinter1" == player.play.showsplinter()[i] ? this.addSplinter(1) : "splinter2" == player.play.showsplinter()[i] ? this.addSplinter(2) : "splinter3" == player.play.showsplinter()[i] && this.addSplinter(3);
      },
      findKey: function findKey() {
        var key1 = this.bagList.indexOf("sheepKey");
        var key2 = this.bagList.indexOf("rabbitKey");
        return -1 != key1 || -1 != key2;
      },
      findSplinter: function findSplinter() {
        var s1 = this.bagList.indexOf("splinter1");
        var s2 = this.bagList.indexOf("splinter2");
        var s3 = this.bagList.indexOf("splinter3");
        return -1 != s1 && -1 != s2 && -1 != s3;
      },
      addkey: function addkey(name) {
        var bagKey = cc.instantiate(this.prefab_bagKey);
        this.node_bagList.children[this.bagList.length].addChild(bagKey);
        if ("sheepKey" == name) {
          bagKey.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = this.sheep;
          bagKey.getChildByName("animal").width = 40;
          bagKey.getChildByName("animal").height = 30;
          bagKey.getChildByName("animal").name = "sheep";
          player.play.setsheepKey();
        } else if ("rabbitKey" == name) {
          bagKey.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = this.rabbit;
          bagKey.getChildByName("animal").width = 30;
          bagKey.getChildByName("animal").height = 30;
          bagKey.getChildByName("animal").name = "rabbit";
          player.play.setrabbitKey();
        }
        this.addbagList(name);
        this.onBtnHandler("bag/view/content/" + this.bagList.length.toString() + "/bagKey");
      },
      addSplinter: function addSplinter(num) {
        var splinter = cc.instantiate(this.prefab_splinter);
        this.node_bagList.children[this.bagList.length].addChild(splinter);
        splinter.getChildByName("num").getComponent(cc.Label).string = num;
        var name = "splinter" + num;
        this.addbagList(name);
        player.play.addsplinter(num);
      },
      addHammer: function addHammer() {
        var hammer = cc.instantiate(this.prefab_hammer);
        this.node_bagList.children[this.bagList.length].addChild(hammer);
        var name = "hammer";
        this.addbagList(name);
        this.onBtnHandler("bag/view/content/" + this.bagList.length.toString() + "/bagHammer");
        player.play.sethammer();
      },
      btnkey: function btnkey(event) {
        if (this.touch && this.findKey()) {
          this.settouch();
          console.log(this.bagList);
          "sheep" == event.target.children[0].name ? this.checkCloseDoor("sheepKey", event.target) : "rabbit" == event.target.children[0].name && this.checkCloseDoor("rabbitKey", event.target);
          console.log(this.bagList);
        }
      },
      addNewBagOne: function addNewBagOne() {
        var bagOne = cc.instantiate(this.bagOne);
        this.node_bagList.addChild(bagOne);
      },
      checkCloseDoor: function checkCloseDoor(keyName, node) {
        var gameSceneJs = cc.find("Canvas").getComponent("gameScene1");
        if ("doorNull" == gameSceneJs.doorName) {
          this.bagList.splice(this.bagList.indexOf(keyName), 1);
          gameSceneJs.moveDoor();
          gameSceneJs.doorCancel();
          node.parent.destroy();
          this.addNewBagOne();
        } else if ("doorSheep" == gameSceneJs.doorName) if ("sheepKey" == keyName) {
          this.bagList.splice(this.bagList.indexOf("sheepKey"), 1);
          gameSceneJs.moveDoor();
          gameSceneJs.doorCancel();
          node.parent.destroy();
          this.addNewBagOne();
        } else {
          gameSceneJs.doorCancel();
          uiManager.openUI("tip", function(obj) {
            obj.getComponent("tip").setData(1);
          });
        } else if ("doorRabbit" == gameSceneJs.doorName) if ("rabbitKey" == keyName) {
          this.bagList.splice(this.bagList.indexOf("rabbitKey"), 1);
          gameSceneJs.moveDoor();
          gameSceneJs.doorCancel();
          node.parent.destroy();
          this.addNewBagOne();
        } else {
          gameSceneJs.doorCancel();
          uiManager.openUI("tip", function(obj) {
            obj.getComponent("tip").setData(1);
          });
        }
      },
      btnHammer: function btnHammer(event) {
        this.hammerOpen = !this.hammerOpen;
        if (this.showHammerOpen()) event.target.getComponent(cc.Animation).play(); else {
          var num = this.bagList.indexOf("hammer") + 1;
          cc.find("bag/view/content/" + num.toString() + "/bagHammer").getComponent(cc.Animation).stop();
          cc.find("bag/view/content/" + num.toString() + "/bagHammer").rotation = 0;
        }
      },
      deleetSplinter: function deleetSplinter() {
        cc.find("bag/view/content/" + (this.bagList.indexOf("splinter1") + 1).toString()).destroy();
        cc.find("bag/view/content/" + (this.bagList.indexOf("splinter2") + 1).toString()).destroy();
        cc.find("bag/view/content/" + (this.bagList.indexOf("splinter3") + 1).toString()).destroy();
        this.bagList.indexOf("splinter1");
        this.bagList.splice(this.bagList.indexOf("splinter1"), 1);
        this.bagList.splice(this.bagList.indexOf("splinter2"), 1);
        this.bagList.splice(this.bagList.indexOf("splinter3"), 1);
      },
      showHammerOpen: function showHammerOpen() {
        return this.hammerOpen;
      },
      addbagList: function addbagList(name) {
        this.bagList.push(name);
      },
      settouch: function settouch() {
        this.touch = !this.touch;
      },
      onBtnHandler: function onBtnHandler(btnPath) {
        var btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, "bagEvent", "onBtnClick");
      },
      onBtnClick: function onBtnClick(event) {
        switch (event.target.name) {
         case "bagKey":
          this.btnkey(event);
          break;

         case "bagHammer":
          this.btnHammer(event);
        }
      }
    });
    cc._RF.pop();
  }, {
    first: "first"
  } ],
  characters: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "519f3QheQVJ64JSpwVfF3Hj", "characters");
    "use strict";
    var player = require("first");
    var mes = require("mes");
    cc.Class({
      extends: cc.Component,
      properties: {
        Bcharacters: cc.SpriteFrame,
        Scharacters: cc.SpriteFrame,
        prefab_chooseDoor: cc.Prefab,
        switchOpen: cc.SpriteFrame,
        switchClose: cc.SpriteFrame
      },
      onLoad: function onLoad() {
        this.initCharactersActive();
        this.setMoveXNum();
        this.flowerNum = 0;
        cc.game.addPersistRootNode(this.node);
        this.dead = false;
      },
      initCharactersActive: function initCharactersActive() {
        if (player.play.showsmallActive()) {
          this.node.getComponent(cc.Sprite).spriteFrame = this.Scharacters;
          this.node.width = 50;
          this.node.height = 55;
          this.node.getComponent(cc.BoxCollider).size = cc.size(50, 55);
          this.node.getComponent(cc.PhysicsBoxCollider).size = cc.size(50, 55);
        } else {
          this.node.getComponent(cc.Sprite).spriteFrame = this.Bcharacters;
          this.node.width = 85;
          this.node.height = 100;
          this.node.getComponent(cc.BoxCollider).size = cc.size(75, 100);
          this.node.getComponent(cc.PhysicsBoxCollider).size = cc.size(75, 100);
        }
      },
      move: function move(name) {
        if ("left" == name) {
          var position = cc.v2(this.node.x - this.moveX, this.node.y);
          player.play.showsmallActive() ? this.node.getComponent(cc.Animation).play("SleftMove") : this.node.getComponent(cc.Animation).play("BleftMove");
        } else if ("right" == name) {
          var position = cc.v2(this.node.x + this.moveX, this.node.y);
          player.play.showsmallActive() ? this.node.getComponent(cc.Animation).play("SrightMove") : this.node.getComponent(cc.Animation).play("BrightMove");
        }
        var action = cc.moveTo(.3, position).easing(cc.easeQuadraticActionOut());
        this.node.runAction(action);
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        if ("goods" == other.node.group) {
          var tag = other.node.getComponent(cc.BoxCollider).tag;
          switch (tag) {
           case 11:
            other.node.destroy();
            cc.find("bag").getComponent("bagEvent").addHammer();
            player.map.deletegameScene1("hammer");
            break;

           case 12:
            other.node.destroy();
            cc.find("bag").getComponent("bagEvent").addkey("sheepKey");
            player.map.deletegameScene1("keySheep");
            break;

           case 21:
            uiManager.openUI("gameOne");
            break;

           case 22:
            uiManager.openUI("gameThree");
            break;

           case 31:
            uiManager.openUI("gameFive");
            cc.find("Canvas/wallAll/run").getComponent("moveWall").setSpeed0();
          }
        } else if ("tool" == other.node.group) {
          var tag = other.node.getComponent(cc.BoxCollider).tag;
          if (1 == tag) uiManager.openUI("gameFindDiff"); else if (2 == tag) {
            mes.switchBool = !mes.switchBool;
            mes.saw = !mes.saw;
            mes.switchBool ? other.node.getComponent(cc.Sprite).spriteFrame = this.switchOpen : other.node.getComponent(cc.Sprite).spriteFrame = this.switchClose;
          } else 3 == tag && cc.find("bag").getComponent("bagEvent").findSplinter();
        } else if ("jump_door" == other.node.group) {
          this.setMoveX0();
          var tag = other.node.getComponent(cc.BoxCollider).tag;
          switch (tag) {
           case 11:
           case 12:
           case 13:
            cc.director.loadScene("gameScene2", function() {
              cc.find("characters").getComponent("characters").setPlayerPosition(tag);
            });
            break;

           case 15:
            cc.director.loadScene("gameScene3", function() {
              cc.find("characters").getComponent("characters").setPlayerPosition(tag);
            });
            break;

           case 16:
            uiManager.openUI("end");
            break;

           case 21:
           case 22:
           case 23:
            cc.director.loadScene("gameScene1", function() {
              cc.find("characters").getComponent("characters").setPlayerPosition(tag);
            });
            break;

           case 24:
            cc.director.loadScene("gameScene3", function() {
              cc.find("characters").getComponent("characters").setPlayerPosition(tag);
            });
            break;

           case 31:
            cc.director.loadScene("gameScene2", function() {
              cc.find("characters").getComponent("characters").setPlayerPosition(tag);
            });
            break;

           case 32:
            cc.director.loadScene("gameScene1", function() {
              cc.find("characters").getComponent("characters").setPlayerPosition(tag);
            });
            break;

           case 33:
            if (false == player.play.showsmallActive() && cc.find("bag").getComponent("bagEvent").findSplinter()) {
              player.play.setsmallActive();
              this.initCharactersActive();
              cc.find("bag").getComponent("bagEvent").deleetSplinter();
            }

           case 34:
            this.setPlayerPosition(tag);
          }
        } else if ("dead" == other.node.group) {
          if (false == this.dead) {
            console.log("\u7ed3\u675f\u6e38\u620f");
            this.node.getComponent(cc.Animation).play("died");
            this.setMoveX0();
            cc.find("Canvas").getComponent("gameScene3").endGame();
            if ("saw" == other.node.name) {
              other.node.getComponent(cc.Animation).stop();
              this.dead = true;
            }
          }
        } else "luodi" == other.node.group && this.setMoveXNum();
      },
      setPlayerPosition: function setPlayerPosition(tag) {
        var position = mes.jumpDoor[Game.gameManager.getNextTag(tag)];
        this.node.setPosition(position);
        this.node.getComponent(cc.Animation).stop();
        player.play.showsmallActive() ? this.node.getComponent(cc.Sprite).spriteFrame = this.Scharacters : this.node.getComponent(cc.Sprite).spriteFrame = this.Bcharacters;
        console.log(this.moveX);
      },
      onCollisionStay: function onCollisionStay(other, self) {
        if ("flower" == other.node.group) {
          this.flowerNum++;
          if (250 == this.flowerNum) {
            other.node.destroy();
            player.map.deletegameScene2("flower");
          }
          console.log(this.flowerNum);
        }
      },
      onCollisionExit: function onCollisionExit(other, self) {
        "flower" == other.node.group && (this.flowerNum = 0);
        if ("tool" == other.node.group) {
          var tag = other.node.getComponent(cc.BoxCollider).tag;
          3 == tag;
        }
      },
      onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        "door" == otherCollider.node.group && uiManager.openUI("chooseDoor", function() {
          cc.find("Canvas").getComponent("gameScene1").setdoorName(otherCollider.node.parent.name);
        });
      },
      setMoveX0: function setMoveX0() {
        this.moveX = 0;
      },
      setMoveXNum: function setMoveXNum() {
        this.moveX = 30;
      },
      onBtnHandler: function onBtnHandler(btnPath) {
        var btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, "game", "onBtnClick");
      }
    });
    cc._RF.pop();
  }, {
    first: "first",
    mes: "mes"
  } ],
  first: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dad5B9kaBCda4aLhD00Wpd", "first");
    "use strict";
    var one = {};
    module.exports = one;
    cc._RF.pop();
  }, {} ],
  gameAll: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1455bM951dLbrbIoOCoWta9", "gameAll");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        Game.gameManager.sceneName = "gameAll";
        Game.gameManager.gameStart = false;
      },
      gameOne: function gameOne() {
        uiManager.creategame("gameOne");
        Game.gameManager.sceneName = "gameOne";
      },
      gameTwo: function gameTwo() {
        uiManager.creategame("gameTwo");
        Game.gameManager.sceneName = "gameTwo";
      },
      gameThree: function gameThree() {
        uiManager.creategame("gameThree");
        Game.gameManager.sceneName = "gameThree";
      },
      gameFour: function gameFour() {
        uiManager.creategame("gameFour");
        Game.gameManager.sceneName = "gameFour";
      },
      gameFive: function gameFive() {
        uiManager.creategame("gameFive");
        Game.gameManager.sceneName = "gameFive";
      },
      gameFindDiff: function gameFindDiff() {
        uiManager.creategame("gameFindDiff");
        Game.gameManager.sceneName = "gameFindDiff";
      }
    });
    cc._RF.pop();
  }, {} ],
  gameFindDiff: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acb4bt/uI5DEabxwu7MPOPF", "gameFindDiff");
    "use strict";
    var mes = require("mes");
    cc.Class({
      extends: cc.Component,
      properties: {
        true: cc.SpriteFrame,
        prefab_false: cc.Prefab,
        all: 10
      },
      onLoad: function onLoad() {
        this.node.x = 640;
        this.node.y = 360;
        this.now = 0;
        this.wrongNum = 0;
        this.scheduleOnce(function() {
          this.node.getChildByName("start").destroy();
        }, 2);
        this.node.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = this.now / this.all;
        this.init();
      },
      init: function init() {
        if (Game.gameManager.gameStart) {
          this.onBtnHandler("gameFindDiff/01/01");
          this.onBtnHandler("gameFindDiff/01/02");
          this.onBtnHandler("gameFindDiff/02/01");
          this.onBtnHandler("gameFindDiff/02/02");
          this.onBtnHandler("gameFindDiff/03/01");
          this.onBtnHandler("gameFindDiff/03/02");
          this.onBtnHandler("gameFindDiff/04/01");
          this.onBtnHandler("gameFindDiff/04/02");
          this.onBtnHandler("gameFindDiff/05/01");
          this.onBtnHandler("gameFindDiff/05/02");
          this.onBtnHandler("gameFindDiff/06/01");
          this.onBtnHandler("gameFindDiff/06/02");
          this.onBtnHandler("gameFindDiff/07/01");
          this.onBtnHandler("gameFindDiff/07/02");
          this.onBtnHandler("gameFindDiff/08/01");
          this.onBtnHandler("gameFindDiff/08/02");
          this.onBtnHandler("gameFindDiff/09/01");
          this.onBtnHandler("gameFindDiff/09/02");
          this.onBtnHandler("gameFindDiff/10/01");
          this.onBtnHandler("gameFindDiff/10/02");
          this.onBtnHandler("gameFindDiff/11/01");
          this.onBtnHandler("gameFindDiff/11/02");
          this.onBtnHandler("gameFindDiff/12/01");
          this.onBtnHandler("gameFindDiff/12/02");
          this.onBtnHandler("gameFindDiff/left");
          this.onBtnHandler("gameFindDiff/right");
        } else {
          this.onBtnHandler("Canvas/gameFindDiff/01/01");
          this.onBtnHandler("Canvas/gameFindDiff/01/02");
          this.onBtnHandler("Canvas/gameFindDiff/02/01");
          this.onBtnHandler("Canvas/gameFindDiff/02/02");
          this.onBtnHandler("Canvas/gameFindDiff/03/01");
          this.onBtnHandler("Canvas/gameFindDiff/03/02");
          this.onBtnHandler("Canvas/gameFindDiff/04/01");
          this.onBtnHandler("Canvas/gameFindDiff/04/02");
          this.onBtnHandler("Canvas/gameFindDiff/05/01");
          this.onBtnHandler("Canvas/gameFindDiff/05/02");
          this.onBtnHandler("Canvas/gameFindDiff/06/01");
          this.onBtnHandler("Canvas/gameFindDiff/06/02");
          this.onBtnHandler("Canvas/gameFindDiff/07/01");
          this.onBtnHandler("Canvas/gameFindDiff/07/02");
          this.onBtnHandler("Canvas/gameFindDiff/08/01");
          this.onBtnHandler("Canvas/gameFindDiff/08/02");
          this.onBtnHandler("Canvas/gameFindDiff/09/01");
          this.onBtnHandler("Canvas/gameFindDiff/09/02");
          this.onBtnHandler("Canvas/gameFindDiff/10/01");
          this.onBtnHandler("Canvas/gameFindDiff/10/02");
          this.onBtnHandler("Canvas/gameFindDiff/11/01");
          this.onBtnHandler("Canvas/gameFindDiff/11/02");
          this.onBtnHandler("Canvas/gameFindDiff/12/01");
          this.onBtnHandler("Canvas/gameFindDiff/12/02");
          this.onBtnHandler("Canvas/gameFindDiff/left");
          this.onBtnHandler("Canvas/gameFindDiff/right");
        }
      },
      btn_true: function btn_true(event) {
        this.now++;
        var node_diff0 = event.target.parent.children[0];
        var node_diff1 = event.target.parent.children[1];
        node_diff0.removeComponent(cc.Button);
        node_diff1.removeComponent(cc.Button);
        node_diff0.getComponent(cc.Sprite).spriteFrame = this.true;
        node_diff0.width = 50;
        node_diff0.height = 50;
        node_diff1.getComponent(cc.Sprite).spriteFrame = this.true;
        node_diff1.width = 50;
        node_diff1.height = 50;
        this.node.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = this.now / this.all;
        if (this.now == this.all) if (Game.gameManager.gameStart) {
          var chest = cc.find("Canvas/chest");
          chest.getComponent(cc.Sprite).spriteFrame = Game.gameManager.chest_open;
          chest.removeComponent(cc.BoxCollider);
          mes.chest = true;
          cc.find("bag").getComponent("bagEvent").addkey("rabbitKey");
          this.node.destroy();
        } else {
          cc.find("Canvas/gameFindDiff").destroy();
          Game.gameManager.sceneName = "gameAll";
        }
      },
      btn_false: function btn_false(event) {
        this.wrongNum++;
        var wrong = cc.instantiate(this.prefab_false);
        event.target.addChild(wrong);
        if ("left" == event.target.name) var pos = this.node.getChildByName("left").convertToNodeSpaceAR(cc.v2(event.touch.getLocationX(), event.touch.getLocationY())); else if ("right" == event.target.name) var pos = this.node.getChildByName("right").convertToNodeSpaceAR(cc.v2(event.touch.getLocationX(), event.touch.getLocationY()));
        wrong.setPosition(pos.x, pos.y);
        this.scheduleOnce(function() {
          wrong.destroy();
        }, 2);
        if (this.wrongNum >= 5) {
          this.wrongNum = 0;
          this.node.getChildByName("wait").active = true;
          this.scheduleOnce(function() {
            this.node.getChildByName("wait").active = false;
          }, 5);
        }
      },
      onBtnHandler: function onBtnHandler(btnPath) {
        var btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, "gameFindDiff", "onBtnClick");
      },
      onBtnClick: function onBtnClick(event) {
        switch (event.target.name) {
         case "01":
         case "02":
          this.btn_true(event);
          break;

         case "left":
         case "right":
          this.btn_false(event);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    mes: "mes"
  } ],
  gameFive: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "704f0nMEZhJ5rsMSe5ZTmiY", "gameFive");
    "use strict";
    var player = require("first");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.change = false;
        this.num = 0;
        this.scaleNum = 1;
        this.schedule(function() {
          this.num++;
          this.num >= 10 && (this.change = true);
        }, 1);
      },
      btn: function btn() {
        this.num = 0;
        this.change = false;
        this.node.getChildByName("Maskyellow").setScale(1);
      },
      update: function update(dt) {
        if (this.change) {
          this.scaleNum += .1;
          this.node.getChildByName("Maskyellow").setScale(this.scaleNum);
          console.log(this.scaleNum);
          if (this.scaleNum >= 30) {
            this.change = false;
            if (Game.gameManager.gameStart) {
              console.log("\u6210\u529f");
              cc.find("Canvas/splinter1").destroy();
              cc.find("bag").getComponent("bagEvent").addSplinter(3);
              player.map.deletegameScene3("splinter3");
              cc.find("Canvas/wallAll/run").getComponent("moveWall").setSpeedMove();
              this.node.destroy();
            } else {
              cc.find("Canvas/gameFive").destroy();
              this.sceneName = "gameAll";
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    first: "first"
  } ],
  gameFour: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1eb03/N0m5DwKX6xfKduGhL", "gameFour");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        prefab_gemstone: cc.Prefab
      },
      onLoad: function onLoad() {
        this.list = [];
        this.listCorrect = [ 101, 102, 105, 107, 108, 111, 202, 205, 208, 211, 301, 302, 304, 305, 308, 310, 311, 402, 405, 408, 411, 502, 504, 505, 507, 508, 511 ];
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "gameFour";
        clickEventHandler.handler = "btn_gemstone";
        for (var i = 1; i < 6; i++) for (var j = 1; j < 12; j++) {
          var gemstone = cc.instantiate(this.prefab_gemstone);
          this.node.getChildByName("bg").addChild(gemstone);
          var num = 100 * i + j;
          gemstone.name = num.toString();
          gemstone.getComponent(cc.Button).clickEvents.push(clickEventHandler);
        }
      },
      btn_gemstone: function btn_gemstone(event) {
        event.target.getChildByName("gemstone").active = !event.target.getChildByName("gemstone").active;
        if (event.target.getChildByName("gemstone").active) {
          this.list.push(parseInt(event.target.name));
          this.list.length == this.listCorrect.length && this.check();
        } else this.list.splice(this.list.indexOf(parseInt(event.target.name)), 1);
        console.log(this.list);
      },
      check: function check() {
        this.list.sort();
        if (this.list.toString() == this.listCorrect.toString()) {
          console.log("\u6210\u529f");
          cc.find("Canvas/gameFour").destroy();
          Game.gameManager.sceneName = "gameAll";
        } else console.log("\u9519\u8bef");
      }
    });
    cc._RF.pop();
  }, {} ],
  gameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8d12uy1WRKBr9eWK+66gAp", "gameManager");
    "use strict";
    window.Game = {
      gameManager: null,
      mes: require("mes"),
      characters: null
    };
    var player = require("first");
    cc.Class({
      extends: cc.Component,
      properties: {
        sheep: cc.SpriteFrame,
        rabbit: cc.SpriteFrame,
        chest_open: cc.SpriteFrame,
        voice_close: cc.SpriteFrame,
        voice_open: cc.SpriteFrame
      },
      onLoad: function onLoad() {
        this.voiceNum = 1;
        this.sceneName = null;
        this.gameStart = false;
        this.touch = false;
        Game.gameManager = this;
        cc.game.addPersistRootNode(this.node);
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.judge_newGame = true;
      },
      onTouch: function onTouch() {
        this.node.getChildByName("left").on("touchstart", this.startMove, this);
        this.node.getChildByName("left").on("touchend", this.endMove, this);
        this.node.getChildByName("left").on("touchcancel", this.endMove, this);
        this.node.getChildByName("right").on("touchstart", this.startMove, this);
        this.node.getChildByName("right").on("touchend", this.endMove, this);
        this.node.getChildByName("right").on("touchcancel", this.endMove, this);
      },
      getNextTag: function getNextTag(tag) {
        switch (tag) {
         case 11:
          return 21;

         case 12:
          return 22;

         case 13:
          return 23;

         case 15:
          return 32;

         case 16:
          return;

         case 21:
          return 11;

         case 22:
          return 12;

         case 23:
          return 13;

         case 24:
          return 31;

         case 31:
          return 24;

         case 32:
          return 15;

         case 33:
          return 34;

         case 34:
          return 33;
        }
      },
      startMove: function startMove(event) {
        this.touch = true;
        this.keepMove(event.target.name);
      },
      keepMove: function keepMove(name) {
        if (this.touch) {
          cc.find("characters").getComponent("characters").move(name);
          this.scheduleOnce(function() {
            this.keepMove(name);
          }, .2);
        }
      },
      endMove: function endMove() {
        this.touch = false;
      },
      initGameScene: function initGameScene() {
        this.node.getChildByName("left").active = !this.node.getChildByName("left").active;
        this.node.getChildByName("right").active = !this.node.getChildByName("right").active;
        this.node.getChildByName("kuang").active = !this.node.getChildByName("kuang").active;
      },
      initOtherScene: function initOtherScene() {
        this.node.getChildByName("list").active = !this.node.getChildByName("list").active;
      },
      btn_list: function btn_list() {
        this.node.getChildByName("choose_list").active = !this.node.getChildByName("choose_list").active;
      },
      btn_return: function btn_return() {
        this.btn_list();
        switch (this.sceneName) {
         case "gameAll":
          this.sceneName = null;
          cc.director.loadScene("main", function(obj) {
            false == Game.gameManager.judge_newGame && (cc.find("Canvas/continueGame").getComponent(cc.Button).interactable = true);
          });
          this.initOtherScene();
          this.node.getChildByName("choose_list").active = false;
          break;

         case "gameScene1":
         case "gameScene2":
         case "gameScene3":
          cc.game.removePersistRootNode(cc.find("characters"));
          cc.game.removePersistRootNode(cc.find("bag"));
          this.sceneName = null;
          cc.director.loadScene("main", function(obj) {
            false == Game.gameManager.judge_newGame && (cc.find("Canvas/continueGame").getComponent(cc.Button).interactable = true);
          });
          this.initGameScene();
          this.initOtherScene();
          this.node.getChildByName("choose_list").active = false;
          break;

         case "gameOne":
         case "gameTwo":
         case "gameThree":
         case "gameFour":
         case "gameFive":
         case "gameFindDiff":
          cc.find("Canvas/" + this.sceneName).destroy();
          this.sceneName = "gameAll";
        }
      },
      btn_voice: function btn_voice(event) {
        this.btn_list();
        0 == this.node.getComponent(cc.AudioSource).volume ? this.node.getComponent(cc.AudioSource).volume = this.voiceNum : this.node.getComponent(cc.AudioSource).volume = 0;
      },
      initGameMes: function initGameMes() {
        Game.mes.chest = false;
        Game.mes.switch = false;
        Game.mes.saw = true;
        Game.mes.switchBool = false;
        player.play.init();
        player.map.init();
        this.judge_newGame = true;
      }
    });
    cc._RF.pop();
  }, {
    first: "first",
    mes: "mes"
  } ],
  gameOne: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc71543t05Pk5QeePsFkU3z", "gameOne");
    "use strict";
    var player = require("first");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node_1 = false;
        this.node_2 = false;
        this.node_3 = false;
      },
      btn_red: function btn_red() {
        this.node.getChildByName("1").getChildByName("kuai").active = false;
        this.node_1 = false;
        this.node.getChildByName("3").getChildByName("kuai").active = false;
        this.node_3 = false;
      },
      btn_green: function btn_green() {
        this.selectNode_1();
        this.selectNode_2();
        this.check();
      },
      btn_blue: function btn_blue() {
        this.selectNode_2();
        this.selectNode_3();
        this.check();
      },
      selectNode_1: function selectNode_1() {
        this.node.getChildByName("1").getChildByName("kuai").active = !this.node.getChildByName("1").getChildByName("kuai").active;
        this.node_1 = !this.node_1;
      },
      selectNode_2: function selectNode_2() {
        this.node.getChildByName("2").getChildByName("kuai").active = !this.node.getChildByName("2").getChildByName("kuai").active;
        this.node_2 = !this.node_2;
      },
      selectNode_3: function selectNode_3() {
        this.node.getChildByName("3").getChildByName("kuai").active = !this.node.getChildByName("3").getChildByName("kuai").active;
        this.node_3 = !this.node_3;
      },
      check: function check() {
        if (this.node_1 && this.node_2 && this.node_3) if (Game.gameManager.gameStart) {
          cc.find("Canvas/splinter/splinter1").destroy();
          cc.find("bag").getComponent("bagEvent").addSplinter(1);
          player.map.deletegameScene2("splinter1");
          this.node.destroy();
        } else {
          cc.find("Canvas/gameOne").destroy();
          Game.gameManager.sceneName = "gameAll";
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    first: "first"
  } ],
  gameScene1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99754gLU+NHMppMz3QZbYQG", "gameScene1");
    "use strict";
    var player = require("first");
    var mes = require("mes");
    cc.Class({
      extends: cc.Component,
      properties: {
        chest_open: cc.SpriteFrame,
        switchOpen: cc.SpriteFrame,
        switchClose: cc.SpriteFrame,
        characters: cc.SpriteFrame
      },
      onLoad: function onLoad() {
        Game.gameManager.sceneName = "gameScene1";
        Game.gameManager.judge_newGame = false;
        Game.gameManager.gameStart = true;
        console.log(player.map.showgameScene1All());
        this.doorName;
        this.initgameScene1();
        cc.find("characters").getComponent("characters").dead = false;
      },
      initgameScene1: function initgameScene1() {
        for (var i = 0; i < player.map.showgameScene1Length(); i++) {
          var node = player.map.showgameScene1(i);
          switch (node) {
           case "doorNull":
            uiManager.createMapUI("door", function(obj) {
              obj.name = "doorNull";
              obj.getChildByName("animal").destroy();
              obj.getChildByName("door").getComponent(cc.PhysicsBoxCollider).tag = 1;
              cc.find("Canvas/door").addChild(obj);
              obj.setPosition(mes.gameScene1.doorNull);
            });
            break;

           case "doorSheep":
            uiManager.createMapUI("door", function(obj) {
              obj.name = "doorSheep";
              obj.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = Game.gameManager.sheep;
              obj.getChildByName("animal").width = 25;
              obj.getChildByName("animal").height = 12;
              obj.getChildByName("door").getComponent(cc.PhysicsBoxCollider).tag = 2;
              cc.find("Canvas/door").addChild(obj);
              obj.setPosition(mes.gameScene1.doorSheep);
            });
            break;

           case "doorRabbit":
            uiManager.createMapUI("door", function(obj) {
              obj.name = "doorRabbit";
              obj.height = 50;
              obj.width = 20;
              obj.getChildByName("animal").getComponent(cc.Sprite).spriteFrame = Game.gameManager.rabbit;
              obj.getChildByName("animal").width = 15;
              obj.getChildByName("animal").height = 10;
              obj.getChildByName("animal").y = 14.3;
              obj.getChildByName("door").getComponent(cc.PhysicsBoxCollider).tag = 3;
              cc.find("Canvas/door").addChild(obj);
              obj.setPosition(mes.gameScene1.doorRabbit);
            });
            break;

           case "hammer":
            uiManager.createMapUI("hammer", function(obj) {
              cc.find("Canvas").addChild(obj);
              obj.setPosition(mes.gameScene1.hammer);
            });
            break;

           case "keySheep":
            uiManager.createMapUI("keySheep", function(obj) {
              cc.find("Canvas").addChild(obj);
              obj.setPosition(mes.gameScene1.keySheep);
            });
          }
        }
        if (mes.chest) {
          cc.find("Canvas/chest").getComponent(cc.Sprite).spriteFrame = Game.gameManager.chest_open;
          cc.find("Canvas/chest").removeComponent(cc.BoxCollider);
        }
        if (mes.switch) {
          console.log("*****************");
          console.log(mes.switch);
          console.log("*****************");
          uiManager.createMapUI("switch", function(obj) {
            cc.find("Canvas").addChild(obj);
            mes.switchBool ? obj.getComponent(cc.Sprite).spriteFrame = cc.find("characters").getComponent("characters").switchOpen : obj.getComponent(cc.Sprite).spriteFrame = cc.find("characters").getComponent("characters").switchClose;
          });
          cc.find("Canvas/jump_door/jumpDoor").destroy();
        }
      },
      doorDetermined: function doorDetermined(event) {
        if (cc.find("bag").getComponent("bagEvent").findKey()) {
          event.target.parent.getChildByName("transparentBag").active = false;
          event.target.getComponent(cc.Button).interactable = false;
          event.target.parent.getChildByName("cancel").getComponent(cc.Button).interactable = false;
          event.target.parent.getChildByName("word").active = false;
          event.target.parent.getChildByName("label").active = true;
          cc.find("bag").getComponent("bagEvent").settouch();
        } else {
          cc.find("chooseDoor").destroy();
          uiManager.openUI("tip", function(obj) {
            obj.getComponent("tip").setData(2);
          });
        }
      },
      doorCancel: function doorCancel() {
        "doorNull" == this.doorName ? this.moveDoor() : cc.find("characters").x += 5;
        cc.find("chooseDoor").destroy();
        console.log(player.map.showgameScene1All());
      },
      moveDoor: function moveDoor() {
        var time = 2;
        var path = "Canvas/door/" + this.doorName + "/door";
        var door = cc.find(path);
        var moveDoor = cc.moveTo(time, cc.v2(door.x, door.height));
        door.runAction(moveDoor);
        door.removeComponent(cc.PhysicsBoxCollider);
        if ("doorNull" == this.doorName) {
          player.map.deletegameScene1("doorNull");
          console.log(player.map.showgameScene1All());
        } else "doorSheep" == this.doorName ? player.map.deletegameScene1("doorSheep") : "doorRabbit" == this.doorName && player.map.deletegameScene1("doorRabbit");
        this.scheduleOnce(function() {
          this.node.getChildByName("door").getChildByName(this.doorName.toString()).destroy();
        }, time);
      },
      onBtnHandler: function onBtnHandler(btnPath) {
        var btn = cc.find(btnPath);
        uiManager.addClickEvent(btn, this.node, "gameScene1", "onBtnClick");
      },
      onBtnClick: function onBtnClick(event) {
        switch (event.target.name) {
         case "determined":
          this.doorDetermined(event);
          break;

         case "cancel":
          this.doorCancel();
        }
      },
      setdoorName: function setdoorName(name) {
        this.doorName = name;
        this.onBtnHandler("chooseDoor/determined");
        this.onBtnHandler("chooseDoor/cancel");
      },
      update: function update() {}
    });
    cc._RF.pop();
  }, {
    first: "first",
    mes: "mes"
  } ],
  gameScene2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54c9dN+I4ZGXJfyxueB9v7e", "gameScene2");
    "use strict";
    var player = require("first");
    var mes = require("mes");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        Game.gameManager.sceneName = "gameScene2";
        console.log(player.map.showgameScene2All());
        this.initgameScene2();
      },
      initgameScene2: function initgameScene2() {
        for (var i = 0; i < player.map.showgameScene2Length(); i++) {
          var node = player.map.showgameScene2(i);
          switch (node) {
           case "flower":
            uiManager.createMapUI("flower", function(obj) {
              cc.find("Canvas").addChild(obj);
              obj.setPosition(Game.mes.gameScene2.flower);
            });
            break;

           case "splinter1":
            uiManager.createMapUI("splinter", function(obj) {
              obj.name = "splinter1";
              cc.find("Canvas/splinter").addChild(obj);
              obj.getComponent(cc.BoxCollider).tag = 21;
              obj.setPosition(Game.mes.gameScene2.splinter1);
            });
            break;

           case "splinter2":
            uiManager.createMapUI("splinter", function(obj) {
              obj.name = "splinter2";
              cc.find("Canvas/splinter").addChild(obj);
              obj.getComponent(cc.BoxCollider).tag = 22;
              obj.setPosition(Game.mes.gameScene2.splinter2);
            });
            break;

           case "fence":
            uiManager.createMapUI("fence", function(obj) {
              cc.find("Canvas").addChild(obj);
              obj.setPosition(Game.mes.gameScene2.fence);
              cc.find("Canvas").getComponent("gameScene2").clickEvent("fence");
            });
            break;

           case "wallShu":
            uiManager.createMapUI("wallShu", function(obj) {
              cc.find("Canvas/wallAll").addChild(obj);
              obj.setPosition(Game.mes.gameScene2.wallShu);
              cc.find("Canvas").getComponent("gameScene2").clickEvent("wallShu");
            });
            break;

           case "jumpDoor":
            uiManager.createMapUI("jumpDoor", function(obj) {
              cc.find("Canvas/jump_door").addChild(obj);
              obj.setPosition(Game.mes.gameScene2.jumpDoor);
              cc.find("Canvas").getComponent("gameScene2").clickEvent("jumpDoor");
            });
          }
        }
      },
      clickEvent: function clickEvent(name) {
        if ("fence" == name) {
          this.fenceNode = cc.find("Canvas/fence");
          this.fenceNode.on("touchstart", this.open, this);
        } else if ("wallShu" == name) {
          this.wallNode = cc.find("Canvas/wallAll/shu");
          this.wallNode.on("touchstart", this.open, this);
        } else if ("jumpDoor" == name) {
          this.jumpDoorNode = cc.find("Canvas/jump_door/jump_door3");
          this.jumpDoorNode.on("touchstart", this.open, this);
        }
      },
      open: function open(event) {
        if (cc.find("bag").getComponent("bagEvent").hammerOpen) {
          cc.find("bag").getComponent("bagEvent").btnHammer();
          if ("fence" == event.target.name) {
            this.fenceNode.off("touchstart", this.openFence, this);
            this.fenceNode.getComponent(cc.Animation).play();
            this.fenceNode.getComponent(cc.Animation).on("finished", function() {
              cc.find("Canvas/fence").destroy();
              player.map.deletegameScene2("fence");
              cc.find("Canvas").getComponent("gameScene2").checkOpen();
              console.log(player.map.showgameScene2All());
            });
          } else if ("shu" == event.target.name) {
            this.wallNode.off("touchstart", this.openWall, this);
            this.wallNode.getComponent(cc.Animation).play();
            this.wallNode.getComponent(cc.Animation).on("finished", function() {
              cc.find("Canvas/wallAll/shu").destroy();
              player.map.deletegameScene2("wallShu");
              cc.find("Canvas").getComponent("gameScene2").checkOpen();
              console.log(player.map.showgameScene2All());
            });
          } else if ("jump_door3" == event.target.name) {
            this.jumpDoorNode.off("touchstart", this.openWall, this);
            this.jumpDoorNode.getComponent(cc.Animation).play();
            this.jumpDoorNode.getComponent(cc.Animation).on("finished", function() {
              cc.find("Canvas/jump_door/jump_door3").destroy();
              player.map.deletegameScene2("jumpDoor");
              cc.find("Canvas").getComponent("gameScene2").checkOpen();
              console.log(player.map.showgameScene2All());
            });
          }
        }
      },
      checkOpen: function checkOpen() {
        for (var i = 0; i < player.map.showgameScene2Length(); i++) "jumpDoor" == player.map.showgameScene2(i) || "wallShu" == player.map.showgameScene2(i) ? mes.switch = false : i == player.map.showgameScene2Length() - 1 && (mes.switch = true);
        console.log("*****************");
        console.log(mes.switch);
        console.log("*****************");
      }
    });
    cc._RF.pop();
  }, {
    first: "first",
    mes: "mes"
  } ],
  gameScene3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fd9fw24t9JwZw8DSuByLZT", "gameScene3");
    "use strict";
    var player = require("first");
    var mes = require("mes");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        Game.gameManager.sceneName = "gameScene3";
        this.initgameScene3();
      },
      initgameScene3: function initgameScene3() {
        for (var i = 0; i < player.map.showgameScene3Length(); i++) {
          var node = player.map.showgameScene3(i);
          switch (node) {
           case "splinter3":
            uiManager.createMapUI("splinter", function(obj) {
              cc.find("Canvas").addChild(obj);
              obj.getComponent(cc.BoxCollider).tag = 31;
              obj.setPosition(Game.mes.gameScene3.splinter3);
            });
            break;

           case "jumpMatrixDown":
            uiManager.createMapUI("jumpMatrixDown", function(obj) {
              cc.find("Canvas/jumpMatrix").addChild(obj);
              var num = Math.random();
              if (num <= .2) {
                obj.setPosition(Game.mes.gameScene3.jumpMatrixDownTop);
                Game.mes.jumpDoor[33] = cc.v2(795, 595);
              } else if (num <= .6) {
                obj.setPosition(Game.mes.gameScene3.jumpMatrixDownLeft);
                Game.mes.jumpDoor[33] = cc.v2(150, 195);
              } else {
                obj.setPosition(Game.mes.gameScene3.jumpMatrixDownRight);
                Game.mes.jumpDoor[33] = cc.v2(990, 195);
              }
            });
          }
        }
        if (Game.mes.saw) {
          cc.find("Canvas/saw").active = true;
          cc.find("Canvas/saw").getComponent(cc.Animation).play();
        } else cc.find("Canvas/saw").active = false;
      },
      endGame: function endGame() {
        uiManager.openUI("endGame", function() {
          uiManager.addClickEvent(cc.find("endGame/determined"), cc.find("Canvas"), "gameScene3", "onBtnClick");
          uiManager.addClickEvent(cc.find("endGame/cancel"), cc.find("Canvas"), "gameScene3", "onBtnClick");
        });
      },
      determined: function determined(event) {
        cc.find("characters").active = false;
        Game.gameManager.initGameMes();
        Game.gameManager.judge_newGame = false;
        cc.director.loadScene("gameScene1", function() {
          cc.find("characters").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas").getComponent("gameScene1").characters;
          cc.find("characters").active = true;
          cc.find("characters").setPosition(mes.charactersInit);
        });
      },
      cancel: function cancel() {
        Game.gameManager.btn_list();
        Game.gameManager.initOtherScene();
        Game.gameManager.initGameScene();
        Game.gameManager.initGameMes();
        cc.game.removePersistRootNode(cc.find("characters"));
        cc.game.removePersistRootNode(cc.find("bag"));
        Game.gameManager.btn_list();
        cc.director.loadScene("main");
      },
      onBtnClick: function onBtnClick(event) {
        switch (event.target.name) {
         case "determined":
          this.determined(event);
          break;

         case "cancel":
          this.cancel();
        }
      }
    });
    cc._RF.pop();
  }, {
    first: "first",
    mes: "mes"
  } ],
  gameSix: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3242a+b/y5H2Y5dDMgT0RV+", "gameSix");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        prefab_redOne: cc.Prefab
      },
      onLoad: function onLoad() {
        this.listTop = [];
        this.listTopCorrect = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ];
        this.listBottom = [];
        this.listBottomCorrect = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "game_six";
        clickEventHandler.handler = "btn_red";
        for (var i = 0; i < 25; i++) {
          var redOne = cc.instantiate(this.prefab_redOne);
          this.node.getChildByName("redTop").addChild(redOne);
          redOne.name = i.toString();
          redOne.getComponent(cc.Button).clickEvents.push(clickEventHandler);
        }
        for (var i = 0; i < 16; i++) {
          var redOne = cc.instantiate(this.prefab_redOne);
          this.node.getChildByName("redBottom").addChild(redOne);
          redOne.name = i.toString();
          redOne.getComponent(cc.Button).clickEvents.push(clickEventHandler);
        }
      },
      btn_red: function btn_red(event) {
        var name = event.target.name;
        if ("redTop" == event.target.parent.name) {
          if (name < 5) {
            event.target.getChildByName("red").active = true;
            this.listTop.push(parseInt(name));
          } else if (name > 4 && name < 12) {
            this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
            this.listBottom.push(parseInt(name - 5));
          } else if (12 == name) {
            this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
            this.node.getChildByName("redBottom").children[15].getChildByName("red").active = true;
            this.listBottom.push(parseInt(name));
            this.listBottom.push(15);
          } else if (name > 12 && name < 15) {
            this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
            this.listBottom.push(parseInt(name - 5));
          } else if (name > 14 && name < 21) {
            this.node.getChildByName("redBottom").children[name - 5].getChildByName("red").active = true;
            event.target.getChildByName("red").active = true;
            this.listBottom.push(parseInt(name - 5));
            this.listTop.push(parseInt(name));
          } else {
            event.target.getChildByName("red").active = true;
            this.listTop.push(parseInt(name));
          }
          console.log(this.listTop.sort());
          console.log(this.listBottom.sort());
        } else {
          if (name < 15) {
            this.node.getChildByName("redTop").children[name].getChildByName("red").active = true;
            this.listTop.push(parseInt(name));
          }
          console.log(this.listTop.sort());
          console.log(this.listBottom.sort());
        }
        this.check();
      },
      check: function check() {
        this.listBottom.sort();
        this.listTop.sort();
        this.listBottom.toString() == this.listBottomCorrect.toString() && this.listTop.toString() == this.listTopCorrect.toString() ? console.log("\u6210\u529f") : console.log("\u9519\u8bef");
      }
    });
    cc._RF.pop();
  }, {} ],
  gameThree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d322eGKzrdGpJoZzhjrYCXr", "gameThree");
    "use strict";
    var player = require("first");
    cc.Class({
      extends: cc.Component,
      properties: {
        prefab_gemstone: cc.Prefab
      },
      onLoad: function onLoad() {
        this.list = [];
        this.listCorrect = [ 11, 14, 15, 21, 22, 23, 24, 32, 34, 42, 43, 44, 45, 51, 52, 55 ];
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "gameThree";
        clickEventHandler.handler = "btn_gemstone";
        for (var i = 1; i < 6; i++) for (var j = 1; j < 6; j++) {
          var gemstone = cc.instantiate(this.prefab_gemstone);
          this.node.getChildByName("bg").addChild(gemstone);
          var num = 10 * i + j;
          gemstone.name = num.toString();
          gemstone.getComponent(cc.Button).clickEvents.push(clickEventHandler);
        }
      },
      btn_gemstone: function btn_gemstone(event) {
        event.target.getChildByName("gemstone").active = !event.target.getChildByName("gemstone").active;
        if (event.target.getChildByName("gemstone").active) {
          this.list.push(parseInt(event.target.name));
          this.list.length == this.listCorrect.length && this.check();
        } else this.list.splice(this.list.indexOf(parseInt(event.target.name)), 1);
      },
      check: function check() {
        this.list.sort();
        if (this.list.toString() == this.listCorrect.toString()) if (Game.gameManager.gameStart) {
          cc.find("Canvas/splinter/splinter2").destroy();
          cc.find("bag").getComponent("bagEvent").addSplinter(2);
          player.map.deletegameScene2("splinter2");
          this.node.destroy();
        } else {
          cc.find("Canvas/gameThree").destroy();
          Game.gameManager.sceneName = "gameAll";
        } else console.log("\u9519\u8bef");
      }
    });
    cc._RF.pop();
  }, {
    first: "first"
  } ],
  gameTwo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae7575v/65Je4xhEIUeujyN", "gameTwo");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node_1 = false;
        this.node_2 = false;
        this.node_3 = false;
      },
      btn_red: function btn_red() {
        if (false == this.node_1 && this.node_3) {
          this.selectNode_1();
          this.selectNode_3();
          this.check();
        } else if (false == this.node_3 && this.node_1) {
          this.selectNode_1();
          this.selectNode_3();
          this.check();
        }
      },
      btn_green: function btn_green() {
        this.node.getChildByName("3").getChildByName("kuai").active = false;
        this.node_3 = false;
      },
      btn_blue: function btn_blue() {
        this.selectNode_1();
        this.selectNode_2();
        this.check();
      },
      selectNode_1: function selectNode_1() {
        this.node.getChildByName("1").getChildByName("kuai").active = !this.node.getChildByName("1").getChildByName("kuai").active;
        this.node_1 = !this.node_1;
      },
      selectNode_2: function selectNode_2() {
        this.node.getChildByName("2").getChildByName("kuai").active = !this.node.getChildByName("2").getChildByName("kuai").active;
        this.node_2 = !this.node_2;
      },
      selectNode_3: function selectNode_3() {
        this.node.getChildByName("3").getChildByName("kuai").active = !this.node.getChildByName("3").getChildByName("kuai").active;
        this.node_3 = !this.node_3;
      },
      check: function check() {
        if (this.node_1 && this.node_2 && this.node_3) {
          cc.find("Canvas/gameTwo").destroy();
          Game.gameManager.sceneName = "gameAll";
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  game_kuai: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95262ZSKDpBvYkfTLGoRc7N", "game_kuai");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.red = 0;
        this.blue = 0;
        this.green = 0;
      },
      btn_blue: function btn_blue() {},
      btn_red: function btn_red() {},
      btn_green: function btn_green() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f93d9J5W2xEmaK2DcLVsutg", "login");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.getChildByName("pwdAgain").active = false;
        var btn = cc.find(btnPath);
        uiManager.addClickEvent("Canvas/login/register", this.node, "login", "onBtnClick");
        uiManager.addClickEvent("Canvas/login/login", this.node, "login", "onBtnClick");
      },
      registerInit: function registerInit() {
        this.node.getChildByName("register").active = false;
        this.node.getChildByName("pwdAgain").active = true;
      },
      loginInit: function loginInit() {},
      onBtnClick: function onBtnClick(event) {
        event.target.name;
      }
    });
    cc._RF.pop();
  }, {} ],
  main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46056149w1JI7bjT2use3Bj", "main");
    "use strict";
    var player = require("first");
    var _i18n = require("LanguageData");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        if (i18n.curLang) {
          _i18n.init(i18n.curLang);
          _i18n.updateSceneRenderers();
        } else {
          _i18n.init("Chinese");
          _i18n.updateSceneRenderers();
        }
        this.node.getComponent(cc.Animation).play();
      },
      btn_newGame: function btn_newGame() {
        if (Game.gameManager.judge_newGame) {
          this.activeBtnName();
          this.node.getChildByName("background").getComponent(cc.Animation).play("bgIn");
          this.scheduleOnce(function() {
            uiManager.openUI("choose_letter", function(obj) {
              obj.getComponent(cc.Animation).play();
              obj.getChildByName("name2").active = false;
              uiManager.addClickEvent(obj.getChildByName("letter_agree"), cc.find("Canvas"), "main", "onBtnClick");
              uiManager.addClickEvent(obj.getChildByName("letter_deny"), cc.find("Canvas"), "main", "onBtnClick");
            });
          }, 1);
        } else uiManager.openUI("choose_newGame", function(obj) {
          uiManager.addClickEvent(obj.getChildByName("newGame_determined"), cc.find("Canvas"), "main", "onBtnClick");
          uiManager.addClickEvent(obj.getChildByName("newGame_cancel"), cc.find("Canvas"), "main", "onBtnClick");
        });
      },
      btn_continueGame: function btn_continueGame() {
        this.activeBtnName();
        this.node.getChildByName("background").getComponent(cc.Animation).play("bgIn");
        this.scheduleOnce(function() {
          uiManager.openUI("choose_letter", function(obj) {
            obj.getComponent(cc.Animation).play();
            obj.getChildByName("name2").active = true;
            uiManager.addClickEvent(obj.getChildByName("letter_agree"), cc.find("Canvas"), "main", "onBtnClick");
            obj.getChildByName("letter_deny").getComponent(cc.Button).interactable = false;
          });
        }, 1);
      },
      btn_selectGame: function btn_selectGame() {
        cc.find("Canvas/choose_selectGame").active = true;
        cc.find("Canvas/choose_selectGame/slider").getComponent(cc.Slider).progress = Game.gameManager.voiceNum;
      },
      btn_exitSelect: function btn_exitSelect() {
        cc.find("Canvas/choose_selectGame").active = false;
      },
      btn_slider: function btn_slider() {
        var num = cc.find("Canvas/choose_selectGame/slider").getComponent(cc.Slider).progress;
        cc.find("gameManager").getComponent(cc.AudioSource).volume = num;
        Game.gameManager.voiceNum = num;
      },
      btn_gameAll: function btn_gameAll() {
        cc.director.loadScene("gameAll", function() {
          Game.gameManager.initOtherScene();
        });
      },
      activeBtnName: function activeBtnName() {
        this.node.getChildByName("name").active = !this.node.getChildByName("name").active;
        this.node.getChildByName("newGame").active = !this.node.getChildByName("newGame").active;
        this.node.getChildByName("continueGame").active = !this.node.getChildByName("continueGame").active;
        this.node.getChildByName("selectGame").active = !this.node.getChildByName("selectGame").active;
        this.node.getChildByName("gameAll").active = !this.node.getChildByName("gameAll").active;
      },
      onBtnClick: function onBtnClick(event) {
        switch (event.target.name) {
         case "letter_agree":
          this.node.getChildByName("continueGame").getComponent(cc.Button).interactable = true;
          cc.director.loadScene("gameScene1", function() {
            Game.gameManager.initGameScene();
            Game.gameManager.initOtherScene();
            Game.gameManager.onTouch();
          });
          break;

         case "letter_deny":
          cc.find("choose_letter").destroy();
          this.node.getChildByName("background").getComponent(cc.Animation).play("bgOut");
          this.scheduleOnce(function() {
            cc.find("Canvas").getComponent("main").activeBtnName();
          }, 1);
          break;

         case "newGame_determined":
          Game.gameManager.initGameMes();
          this.node.getChildByName("continueGame").getComponent(cc.Button).interactable = false;

         case "newGame_cancel":
          cc.find("choose_newGame").destroy();
        }
      },
      btn_Chinese: function btn_Chinese() {
        _i18n.init("Chinese");
        _i18n.updateSceneRenderers();
      },
      btn_English: function btn_English() {
        _i18n.init("English");
        _i18n.updateSceneRenderers();
      }
    });
    cc._RF.pop();
  }, {
    LanguageData: "LanguageData",
    first: "first"
  } ],
  mes_map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5688emudmBDfaKDV1UJw1Yr", "mes_map");
    "use strict";
    var third = require("first");
    var Third = function Third() {
      module = this;
      var gameScene1 = [ "doorNull", "doorSheep", "doorRabbit", "hammer", "keySheep" ];
      var gameScene2 = [ "flower", "fence", "splinter1", "splinter2", "jumpDoor", "wallShu" ];
      var gameScene3 = [ "splinter3", "jumpMatrixDown" ];
      module.showgameScene1Length = function() {
        return gameScene1.length;
      };
      module.showgameScene1 = function(i) {
        return gameScene1[i];
      };
      module.showgameScene1All = function() {
        return gameScene1;
      };
      module.deletegameScene1 = function(name) {
        var no = gameScene1.indexOf(name);
        -1 != no ? gameScene1.splice(no, 1) : console.log("deleteErr");
      };
      module.showgameScene2Length = function() {
        return gameScene2.length;
      };
      module.showgameScene2 = function(i) {
        return gameScene2[i];
      };
      module.showgameScene2All = function() {
        return gameScene2;
      };
      module.deletegameScene2 = function(name) {
        var no = gameScene2.indexOf(name);
        -1 != no ? gameScene2.splice(no, 1) : console.log("deleteErr");
      };
      module.showgameScene3Length = function() {
        return gameScene3.length;
      };
      module.showgameScene3 = function(i) {
        return gameScene3[i];
      };
      module.showgameScene3All = function() {
        return gameScene3;
      };
      module.deletegameScene3 = function(name) {
        var no = gameScene3.indexOf(name);
        -1 != no ? gameScene3.splice(no, 1) : console.log("deleteErr");
      };
      module.init = function() {
        gameScene1 = [ "doorNull", "doorSheep", "doorRabbit", "hammer", "keySheep" ];
        gameScene2 = [ "flower", "fence", "splinter1", "splinter2", "jumpDoor", "wallShu" ];
        gameScene3 = [ "splinter3", "jumpMatrixDown" ];
      };
    };
    third.map = new Third();
    cc._RF.pop();
  }, {
    first: "first"
  } ],
  mes_player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d0afHurY1LQ5s3xjxk2HZy", "mes_player");
    "use strict";
    var second = require("first");
    var Second = function Second() {
      module = this;
      var sheepKey = false;
      var rabbitKey = false;
      var hammer = false;
      var splinter = [];
      var smallActive = false;
      module.showsheepKey = function() {
        return sheepKey;
      };
      module.setsheepKey = function() {
        sheepKey = !sheepKey;
      };
      module.showrabbitKey = function() {
        return rabbitKey;
      };
      module.setrabbitKey = function() {
        rabbitKey = !rabbitKey;
      };
      module.showsplinter = function() {
        return splinter;
      };
      module.addsplinter = function(no) {
        splinter.push(no);
        splinter.sort();
      };
      module.sethammer = function() {
        hammer = !hammer;
      };
      module.showhammer = function() {
        return hammer;
      };
      module.showsmallActive = function() {
        return smallActive;
      };
      module.setsmallActive = function() {
        smallActive = !smallActive;
      };
      module.init = function() {
        sheepKey = false;
        rabbitKey = false;
        hammer = false;
        splinter = [];
        smallActive = false;
      };
    };
    second.play = new Second();
    cc._RF.pop();
  }, {
    first: "first"
  } ],
  mes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0d37bAVSNFjan4h7mVnhrH", "mes");
    "use strict";
    var obj = {
      jumpDoor: {
        11: cc.v2(980, 140),
        12: cc.v2(745, 620),
        13: cc.v2(390, 560),
        15: cc.v2(980, 370),
        21: cc.v2(975, 475),
        22: cc.v2(150, 150),
        23: cc.v2(565, 150),
        24: cc.v2(975, 150),
        31: cc.v2(160, 655),
        32: cc.v2(510, 435),
        33: null,
        34: cc.v2(155, 435)
      },
      charactersInit: cc.v2(115, 300),
      gameScene1: {
        doorNull: cc.v2(706, 145),
        doorSheep: cc.v2(840, 393),
        doorRabbit: cc.v2(359, 106),
        hammer: cc.v2(-330, -100),
        keySheep: cc.v2(-175, -260)
      },
      gameScene2: {
        flower: cc.v2(-378, 7),
        splinter1: cc.v2(-588, 100),
        splinter2: cc.v2(95, -245),
        fence: cc.v2(205, -180),
        jumpDoor: cc.v2(-170, -225),
        wallShu: cc.v2(-264, -180)
      },
      gameScene3: {
        splinter3: cc.v2(-152, -180),
        jumpMatrixDownTop: cc.v2(235, 220),
        jumpMatrixDownLeft: cc.v2(-575, -165),
        jumpMatrixDownRight: cc.v2(430, -165)
      },
      chest: false,
      switch: false,
      saw: true,
      switchBool: false
    };
    module.exports = obj;
    cc._RF.pop();
  }, {} ],
  moveWall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b8c3gtJ5FPFanNDy7++ZfQ", "moveWall");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.speed = 0;
        this.number = 0;
        this.characters = false;
      },
      onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if ("stand" == otherCollider.node.group) {
          this.speed = selfCollider.node.getComponent(cc.RigidBody).linearVelocity;
          this.speed.x = -this.speed.x;
          selfCollider.node.getComponent(cc.RigidBody).linearVelocity = this.speed;
          this.characters && (cc.find("characters").getComponent(cc.RigidBody).linearVelocity = this.speed);
        } else if ("characters" == otherCollider.node.group) {
          this.characters = true;
          otherCollider.node.getComponent("characters").moveC = 15;
        }
      },
      onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
        if ("characters" == otherCollider.node.group) {
          this.characters = false;
          cc.find("characters").getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        }
      },
      setSpeed0: function setSpeed0() {
        this.speed = this.node.getComponent(cc.RigidBody).linearVelocity;
        this.number = this.speed.x;
        this.speed.x = 0;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.speed;
      },
      setSpeedMove: function setSpeedMove() {
        this.speed = this.node.getComponent(cc.RigidBody).linearVelocity;
        this.speed.x = this.number;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.speed;
        cc.find("characters").getComponent(cc.RigidBody).linearVelocity = this.speed;
      }
    });
    cc._RF.pop();
  }, {} ],
  player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5df0/dS71O57PrzxMUIdJh", "player");
    "use strict";
    cc._RF.pop();
  }, {} ],
  "polyglot.min": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(e, t) {
      "function" == typeof define && define.amd ? define([], function() {
        return t(e);
      }) : "object" == ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t(e) : e.Polyglot = t(e);
    })(void 0, function(e) {
      function t(e) {
        e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", 
        this.allowMissing = !!e.allowMissing, this.warn = e.warn || c;
      }
      function s(e) {
        var t, n, r, i = {};
        for (t in e) if (e.hasOwnProperty(t)) {
          n = e[t];
          for (r in n) i[n[r]] = t;
        }
        return i;
      }
      function o(e) {
        var t = /^\s+|\s+$/g;
        return e.replace(t, "");
      }
      function u(e, t, r) {
        var i, s, u;
        return null != r && e ? (s = e.split(n), u = s[f(t, r)] || s[0], i = o(u)) : i = e, 
        i;
      }
      function a(e) {
        var t = s(i);
        return t[e] || t.en;
      }
      function f(e, t) {
        return r[a(e)](t);
      }
      function l(e, t) {
        for (var n in t) "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
        return e;
      }
      function c(t) {
        e.console && e.console.warn && e.console.warn("WARNING: " + t);
      }
      function h(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      t.VERSION = "0.4.3", t.prototype.locale = function(e) {
        return e && (this.currentLocale = e), this.currentLocale;
      }, t.prototype.extend = function(e, t) {
        var n;
        for (var r in e) e.hasOwnProperty(r) && (n = e[r], t && (r = t + "." + r), "object" == ("undefined" === typeof n ? "undefined" : _typeof(n)) ? this.extend(n, r) : this.phrases[r] = n);
      }, t.prototype.clear = function() {
        this.phrases = {};
      }, t.prototype.replace = function(e) {
        this.clear(), this.extend(e);
      }, t.prototype.t = function(e, t) {
        var n, r;
        return t = null == t ? {} : t, "number" == typeof t && (t = {
          smart_count: t
        }), "string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._ : this.allowMissing ? n = e : (this.warn('Missing translation for key: "' + e + '"'), 
        r = e), "string" == typeof n && (t = h(t), r = u(n, this.currentLocale, t.smart_count), 
        r = l(r, t)), r;
      }, t.prototype.has = function(e) {
        return e in this.phrases;
      };
      var n = "||||", r = {
        chinese: function chinese(e) {
          return 0;
        },
        german: function german(e) {
          return 1 !== e ? 1 : 0;
        },
        french: function french(e) {
          return e > 1 ? 1 : 0;
        },
        russian: function russian(e) {
          return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
        },
        czech: function czech(e) {
          return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
        },
        polish: function polish(e) {
          return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
        },
        icelandic: function icelandic(e) {
          return e % 10 !== 1 || e % 100 === 11 ? 1 : 0;
        }
      }, i = {
        chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
        german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
        french: [ "fr", "tl", "pt-br" ],
        russian: [ "hr", "ru" ],
        czech: [ "cs" ],
        polish: [ "pl" ],
        icelandic: [ "is" ]
      };
      return t;
    });
    cc._RF.pop();
  }, {} ],
  tip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2203IAwF1NqKx2GHCMDzPk", "tip");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        word: cc.Label
      },
      setData: function setData(num) {
        this.node.getComponent(cc.Animation).play();
        this.node.getComponent(cc.Animation).on("finished", function() {
          cc.find("tip").destroy();
        });
        "Chinese" == i18n.curLang ? 1 == num ? this.word.string = "\u9009\u62e9\u7684\u94a5\u5319\u9519\u8bef" : 2 == num && (this.word.dtring = "\u80cc\u5305\u4e2d\u4e0d\u5b58\u5728\u94a5\u5319") : 1 == num ? this.word.string = "Error in key selection" : 2 == num && (this.word.dtring = "There is no key in the backpack");
      }
    });
    cc._RF.pop();
  }, {} ],
  uiManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d34ar1nbZJV6BHl0Y90nZx", "uiManager");
    "use strict";
    window.uiManager = {};
    uiManager.openUI = function(uiName, callBack) {
      cc.loader.loadRes("prefab/" + uiName, function(err, prefab) {
        if (err) {
          cc.error(err.message || err);
          return;
        }
        var node = cc.instantiate(prefab);
        node.parent = cc.Canvas.instance.node.parent;
        callBack && callBack(node);
      });
    };
    uiManager.createMapUI = function(uiName, callBack) {
      cc.loader.loadRes("prefab/map/" + uiName, function(err, prefab) {
        if (err) {
          cc.error(err.message || err);
          return;
        }
        var node = cc.instantiate(prefab);
        callBack && callBack(node);
      });
    };
    uiManager.creategame = function(uiName, callBack) {
      cc.loader.loadRes("prefab/" + uiName, function(err, prefab) {
        if (err) {
          cc.error(err.message || err);
          return;
        }
        var node = cc.instantiate(prefab);
        node.parent = cc.find("Canvas");
        node.x = 0;
        node.y = 0;
        callBack && callBack(node);
      });
    };
    uiManager.addClickEvent = function(node, target, component, handler) {
      var eventHandler = new cc.Component.EventHandler();
      eventHandler.target = target;
      eventHandler.component = component;
      eventHandler.handler = handler;
      var clickEvents = node.getComponent(cc.Button).clickEvents;
      clickEvents.push(eventHandler);
    };
    cc._RF.pop();
  }, {} ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b506WgyQZNuZ9Nu1UjC3Qi", "utils");
    "use strict";
    var utils = {};
    module.exports = utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "Chinese", "English", "login", "moveWall", "bagEvent", "characters", "gameAll", "gameManager", "gameScene1", "gameScene2", "gameScene3", "gameFindDiff", "gameFive", "gameFour", "gameOne", "gameSix", "gameThree", "gameTwo", "game_kuai", "main", "first", "mes", "mes_map", "mes_player", "player", "utils", "tip", "uiManager" ]);