import * as PIXI from "pixi.js";
import { sound } from "@pixi/sound";

export default class SceneObject {
  constructor(
    app,
    moneyData,
    overlay,
    overText,
    addSound,
    soundName,
    spriteName,
    imgRef,
    posX,
    posY,
    scaleSize,
    activeStat,
    addFilter,
    message,
    price,
    catObj, 
    boostValue
  ) {
    this.app = app;
    this. moneyData = moneyData
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
    this.sprite = PIXI.Sprite.from(imgRef);
    this.catObj= catObj
    this.boostValue = boostValue
    if (this.sprite) {
      this.sprite.position.x = posX;
      this.sprite.position.y = posY;
      this.sprite.scale.x = scaleSize;
      this.sprite.scale.y = scaleSize;
      this.sprite.eventMode = activeStat;
      this.addFilter = addFilter; //name of filter applied

      // Check if there is a filter to add to object
      if (this.addFilter) {
        this.sprite.filters = [this.addFilter];
      }
      this.message = message;
      this.sprite.on("pointerdown", this.onClick.bind(this));
      this.container.addChild(this.sprite);
    }
    sound.add(`${this.soundName}`, `${this.soundPath}`);
    this.container.name = `${this.spriteName}Cont`

  }

  onClick() {
    // Update Cat 
    if(this.spriteName === "toys"){
      this.catObj.updateJoy(this.boostValue)
    }
    if(this.spriteName === "bowls"){
      this.catObj.updateHunger(this.boostValue)
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
