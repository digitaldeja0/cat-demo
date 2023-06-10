import "./style.css";
import * as PIXI from "pixi.js";
import { sound } from "@pixi/sound";
// import { GlowFilter } from 'pixi-filters';
import { GlowFilter } from "@pixi/filter-glow";
// import * as particles from '@pixi/particle-emitter'
// import ParticleSystem from "./scripts/particles";

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
  sound.play("bg");
});

sound.add("bowls", "sounds/bowls.mp3");
sound.add("foodBox", "sounds/foodBox.mp3");
sound.add("medicine", "sounds/medicine.mp3");
sound.add("meow", "sounds/meow.mp3");
sound.add("toys", "sounds/toys.mp3");
sound.add("treats", "sounds/treats.mp3");

/*
 ***
 ***** Add Sprites/Containers
 ***
 */

const glowFilter = new GlowFilter({ distance: 15, outerStrength: 2 });


let partContainer = new PIXI.Container();



// Bowls
let bowlContainer = new PIXI.Container();
app.stage.addChild(bowlContainer);
let bowls = PIXI.Sprite.from("/assets/bowls.png");
bowls.position.y = 330;
bowls.position.x = 30;
bowls.scale.x = 0.5;
bowls.scale.y = 0.5;
bowls.eventMode = "static";

bowls.on("pointerdown", bowlClick);
bowls.on("pointerover", bowlHoverOver);
bowls.on("pointerover", bowlHoverOut);

bowls.filters = [glowFilter];

bowlContainer.addChild(bowls);
function bowlClick() {
  sound.play("bowls");
  overlay.style.display = "flex";
  overText.textContent = "Thanks for the Din-Din 🐟";
}

function bowlHoverOver() {
  // bowlGlowFilter.alpha = 1;
}

function bowlHoverOut() {
  // bowlGlowFilter.alpha = 0;
}

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
let toyContainer = new PIXI.Container();
toyContainer.isSprite = true;
app.stage.addChild(toyContainer);
let toys = PIXI.Sprite.from("/assets/toys.png");
toys.position.y = 245;
toys.position.x = 220;
toys.scale.x = 0.28;
toys.scale.y = 0.28;
toyContainer.addChild(toys);
toys.filters = [glowFilter];
toys.eventMode = "static";
toys.on("pointerdown", toyClick);

function toyClick() {
  sound.play("toys");
  console.log("hi");
  overlay.style.display = "flex";
  overText.textContent = "Mouse...mouse...mouse 🐭";
}

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

// Particle System
// const myParticles = new ParticleSystem(app, "/assets/cat-profile.png")
// myParticles.start();

// Listen for frame updates
app.ticker.add(() => {});
