import * as PIXI from "pixi.js";
import { sound } from "@pixi/sound";
import { GlowFilter } from "@pixi/filter-glow";
export default class SceneObject {
  constructor(
    app,
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
    this.sprite = PIXI.Sprite.from(imgRef);
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
      container.addChild(this.sprite);
    }
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
