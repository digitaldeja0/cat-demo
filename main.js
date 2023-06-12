import "./style.css";
import * as PIXI from "pixi.js";
import * as particles from "@pixi/particle-emitter";
import { sound } from "@pixi/sound";
import { GlowFilter } from "@pixi/filter-glow";
// Objects
import SceneObject from "./scripts/sceneObject";

/*
 ***
 ***** Scene Setup
 ***
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
  // sound.play("bg");
});

// sound.add("bowls", "sounds/bowls.mp3");
sound.add("foodBox", "sounds/foodBox.mp3");
sound.add("medicine", "sounds/medicine.mp3");
sound.add("meow", "sounds/meow.mp3");
// sound.add("toys", "sounds/toys.mp3");
sound.add("treats", "sounds/treats.mp3");

/*
 ***
 ***** Add Sprites/Containers
 ***
 */

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
let foodContainer = new PIXI.Container();
app.stage.addChild(foodContainer);
const foodPos = [
  [180, 45],
  [180, 100],
  [240, 45],
  [240, 100],
  [295, 45],
  [295, 100],
];

foodPos.forEach((sprite) => {
  const food = PIXI.Sprite.from("/assets/food.png");
  food.position.y = sprite[0];
  food.position.x = sprite[1];
  food.scale.x = 0.1;
  food.scale.y = 0.1;
  foodContainer.addChild(food);
  // food.filters = [glowFilter];
  // food.eventMode = "static";
  // food.on("pointerdown", foodBoxClick);
});
function foodBoxClick() {
  sound.play("foodBox");
  console.log("hi");
  overlay.style.display = "flex";
  overText.textContent = "I 😻 U";
}

// Treats
let treatsContainer = new PIXI.Container();
app.stage.addChild(treatsContainer);
const treatsPos = [
  [110, 25],
  [110, 65],
  [110, 110],
];
treatsPos.forEach((sprite) => {
  const treats = PIXI.Sprite.from("/assets/treats.png");
  treats.position.y = sprite[0];
  treats.position.x = sprite[1];
  treats.scale.x = 0.13;
  treats.scale.y = 0.13;
  treatsContainer.addChild(treats);
  treats.filters = [glowFilter];
  treats.eventMode = "static";
  treats.on("pointerdown", treatClick);
  function treatClick() {
    sound.play("treats");
    console.log("hi");
    overlay.style.display = "flex";
    overText.textContent = "Yummmm...🍭";
  }
});

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
let medsContainer = new PIXI.Container();
app.stage.addChild(medsContainer);
const medsPos = [
  [120, 290],
  [120, 370],
];
medsPos.forEach((sprite) => {
  const meds = PIXI.Sprite.from("/assets/meds.png");
  meds.position.y = sprite[0];
  meds.position.x = sprite[1];
  meds.scale.x = 0.13;
  meds.scale.y = 0.13;
  medsContainer.addChild(meds);
  meds.filters = [glowFilter];
  meds.eventMode = "static";
  meds.on("pointerdown", medClick);
  function medClick() {
    sound.play("medicine");
    console.log("hi");
    overlay.style.display = "flex";
    overText.textContent = "Feeling Much Better 💖";
  }
});

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

// Particles
const cnt = new PIXI.ParticleContainer();
app.stage.addChild(cnt);
cnt.position.x = 150;
cnt.position.y = 400;
PIXI.Assets.add("heart", "/assets/heart.png");
const heartRef = await PIXI.Assets.load("heart");


const emitter = new particles.Emitter(cnt, {
  lifetime: { min: 0.5, max: 3 },
  frequency: 0.1,
  spawnChance: 1,
  particlesPerWave: 1,
  emitterLifetime: 100,
  maxParticles: 10,
  pos: { x: 0, y: 0 },
  autoUpdate: true,
  behaviors: [
    {
      type: "spawnBurst",
      config: {
        start: 270,
        spacing: 45,
        distance: 0,
      },
    },
    {
      type: "spawnShape",
      config: {
        type: "rect",
        data: { x: 0, y: 0, w: 40, h: 10 },
      },
    },
    {
      type: "textureSingle",
      config: { texture: heartRef },
    },
    {
      type: "moveSpeedStatic",
      config: {
        min: 50,
        max: 500,
      },
    },
    {
      type: "rotationStatic",
      config: {
        min: 0,
        max: 0,
      },
    },
    {
      type: "scale",
      config: {
        scale: {
          list: [
            { value: 0.1, time: 0 },
            { value: 0.5, time: 0.5 },
            { value: 0.1, time: 2 },
          ],
        },
      },
    },
  ],
});


// Listen for frame updates
app.ticker.add(() => {});
