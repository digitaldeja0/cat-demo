import * as PIXI from "pixi.js";
import { sound } from "@pixi/sound";
import { GlowFilter } from "@pixi/filter-glow";

export default class MultiSceneObject {
  constructor(
    app,
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
    message
  ) {
    this.app = app;
    const container = new PIXI.Container();
    this.app.stage.addChild(container);
    this.overlay = overlay;
    this.overText = overText;
    this.addSound = addSound; //boolean to check if sound is going to be passed
    this.soundName = soundName;
    this.soundPath = `/sounds/${this.soundName}.mp3`;
    this.spriteName = spriteName;
    this.spriteUrl = `/assets/${this.spriteName}.png`;
    this.posArr = posArr;

    if (this.posArr) {
      this.posArr.forEach((sprite) => {
        const item = PIXI.Sprite.from(imgRef);
        item.position.y = sprite[0];
        item.position.x = sprite[1];
        item.scale.x = scaleSize;
        item.scale.y = scaleSize;
        item.eventMode = activeStat
        if (this.addFilter) {
          item.filters = [addFilter];
        }
        item.on("pointerdown", this.onClick.bind(this));
        container.addChild(item);
      });
    }
    this.message = message;

    sound.add(`${this.soundName}`, `${this.soundPath}`);
  }

  onClick() {
    if (this.addSound) {
      sound.play(this.soundName);
      this.overlay.style.display = "flex";
      this.overText.textContent = this.message;
    }
  }
}

// export class multiSceneObjects extends SceneObject{
//  constructor(){
//   super()
//  }
// }
