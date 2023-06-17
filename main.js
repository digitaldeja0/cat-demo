import "./style.css";
import * as PIXI from "pixi.js";
import { sound } from "@pixi/sound";
import { GlowFilter } from "@pixi/filter-glow";
// Objects
import SceneObject from "./scripts/sceneObject";
import {createParticles} from "./scripts/particles";
import MultiSceneObject  from "./scripts/multiSceneObject";

/*
 ** Scene Setup
 */

const size = {
  width: 500,
  height: 500,
};
const app = new PIXI.Application({
  width: size.width,
  height: size.height,
  backgroundAlpha: 0,
});
const appDiv = document.querySelector("#app");
appDiv.appendChild(app.view);

// Load Text
const pElement = document.querySelector("#pText");
pElement.textContent = "Buffalo Cat Shelter";

//Setup Overlay

const overlay = document.querySelector("#overDiv");
overlay.style.display = "none";
const overlayBtn = document.querySelector("#overButton");
const overText = document.querySelector("#overText");

overlayBtn.addEventListener("click", (e) => {
  e.preventDefault;
  overlay.style.display = "none";
  overText.textContent = "Meow, meow, meow...";
});

// Sound
window.addEventListener("load", (e) => {
  e.preventDefault;
  sound.add("bg", "sounds/bg.mp3");
  sound.play("bg");
});


sound.add("meow", "sounds/meow.mp3");

/*
 ** Add Sprites/Containers
 */

 // Particles
const cnt = new PIXI.ParticleContainer();
app.stage.addChild(cnt);
cnt.position.x = 150;
cnt.position.y = 400;
PIXI.Assets.add("heart", "/assets/heart.png");
const heartRef = await PIXI.Assets.load("heart");

// Filter
const glowFilter = new GlowFilter({ distance: 15, outerStrength: 2 });

//Create Loader
PIXI.Assets.add("bowls", "/assets/bowls.png");
const bowlRef = await PIXI.Assets.load("bowls");
// Bowls
const bowls = new SceneObject(
  app,
  overlay,
  overText,
  true,
  "bowls",
  "bowls",
  bowlRef,
  30,
  330,
  0.5,
  "static",
  glowFilter,
  "Thanks for the Din-Din 🐟"
);

// Food
const foodPos = [
  [180, 45],
  [180, 100],
  [240, 45],
  [240, 100],
  [295, 45],
  [295, 100],
];

PIXI.Assets.add("foodBox", "/assets/foodBox.png");
const foodBoxRef = await PIXI.Assets.load("foodBox");
const foodBox = new MultiSceneObject(app, overlay, overText, true, "foodBox", "foodBox", foodBoxRef, foodPos,0.1, "static", glowFilter, "I 😻 U" )

// Treats
const treatsPos = [
  [110, 25],
  [110, 65],
  [110, 110],
];
PIXI.Assets.add("treats", "/assets/treats.png");
const treatsRef = await PIXI.Assets.load("treats");
const treats = new MultiSceneObject(app, overlay, overText, true, "treats", "treats", treatsRef, treatsPos, 0.13, "static", glowFilter, "Yummmm...🍭" )


// Toys

PIXI.Assets.add("toys", "/assets/toys.png");
const toysRef = await PIXI.Assets.load("toys");
// Bowls
const toys = new SceneObject(
  app,
  overlay,
  overText,
  true,
  "toys",
  "toys",
  toysRef,
  220,
  245,
  0.28,
  "static",
  glowFilter,
  "Mouse...mouse...mouse 🐭"
);

// Medicine
const medsPos = [
  [120, 290],
  [120, 370],
];

PIXI.Assets.add("meds", "/assets/meds.png");
const medsRef = await PIXI.Assets.load("meds");
const meds = new MultiSceneObject(app, overlay, overText, true, "meds", "meds", medsRef, medsPos, 0.13, "static", glowFilter, "Feeling Much Better 💖" )


// Animated Sprite
const catImages = [
  "/assets/cat/1.png",
  "/assets/cat/2.png",
  "/assets/cat/2.png",
  "/assets/cat/2.png",
];
const catArray = [];
for (let i = 0; i < catImages.length; i++) {
  const cat = PIXI.Texture.from(catImages[i]);
  catArray.push(cat);
}
const animatedSprite = new PIXI.AnimatedSprite(catArray);
animatedSprite.position.x = 150;
animatedSprite.position.y = 400;
animatedSprite.scale.x = 0.1;
animatedSprite.scale.y = 0.1;
animatedSprite.play();
animatedSprite.animationSpeed = 0.005;
app.stage.addChild(animatedSprite);
animatedSprite.filters = [glowFilter];

animatedSprite.eventMode = "static";
animatedSprite.on("pointerdown", catClick);
function catClick() {
  sound.play("meow");
  console.log("hi");
  overlay.style.display = "flex";
  overText.textContent = "I 😻 U";
}


const emitter = await createParticles(cnt)
const displayPart =(delta)=>{
  emitter.update(delta)
}

var elapsed = Date.now();
var update = function(){
	requestAnimationFrame(update);
	var now = Date.now();
  if(emitter){
    displayPart((now - elapsed) * 0.001)
  }
	elapsed = now;
};
update()

app.ticker.add(() => {
});

export {cnt, app, heartRef}
