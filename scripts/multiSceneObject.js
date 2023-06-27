import * as PIXI from "pixi.js";
import { sound } from "@pixi/sound";

export default class MultiSceneObject {
  constructor(
    app,
    moneyData,
    overlay,
    overText,
    addSound,
    soundName,
    spriteName,
    imgRef,
    posArr,
    scaleSize,
    activeStat,
    addFilter,
    message,
    price,
    catObj,
    boostValue
  ) {
    this.app = app;
    this.moneyData = moneyData
    this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);
    this.price = price
    this.overlay = overlay;
    this.overText = overText;
    this.addSound = addSound; //boolean to check if sound is going to be passed
    this.soundName = soundName;
    this.soundPath = `/sounds/${this.soundName}.mp3`;
    this.spriteName = spriteName;
    this.spriteUrl = `/assets/${this.spriteName}.png`;
    this.posArr = posArr;
    this.addFilter = addFilter
    this.containrRef = []
    this.catObj= catObj
    this.boostValue = boostValue



    if (this.posArr) {
      this.posArr.forEach((sprite) => {
        const item = PIXI.Sprite.from(imgRef);
        item.position.y = sprite[0];
        item.position.x = sprite[1];
        item.scale.x = scaleSize;
        item.scale.y = scaleSize;
        item.eventMode = activeStat
        if (this.addFilter) {
          item.filters = [this.addFilter];
        }
        item.on("pointerdown", this.onClick.bind(this));
        this.container.addChild(item);
      });
    }
    this.message = message;

    sound.add(`${this.soundName}`, `${this.soundPath}`);
    this.container.name = `${this.spriteName}Cont`
  }

  onClick() {
        // Update Cat 
        if(this.spriteName === "treats"){
          this.catObj.updateJoy(this.boostValue)
          this.catObj.updateHunger(1)
        }
        if(this.spriteName === "foodBox"){
          this.catObj.updateHunger(this.boostValue)
        }
        if(this.spriteName === "meds"){
          this.catObj.updateHealth(this.boostValue)
        }
  
    // Update Price
    const newTotal = this.moneyData.moneyTotal-this.price
    this.moneyData.updateMoney(newTotal)
    // Display and Sound
    if (this.addSound) {
      sound.play(this.soundName);
      this.overlay.style.display = "flex";
      this.overText.textContent = this.message;
    }
  }
}

