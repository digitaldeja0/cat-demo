import * as PIXI from "pixi.js";
import * as particles from '@pixi/particle-emitter'

// export default class ParticleSystem{
//     constructor(app, appimagePath) {
//       this.app = app
//       this.particles = [];
//       this.imagePath = imagePath;
//       this.emitParticles()
  
//     //   // Create a container for particles
//     //   this.container = new PIXI.ParticleContainer();
//     //   this.app.stage.addChild(this.container);
  
//     //   // Listen for click events
//     //   this.app.view.addEventListener("click", this.emitParticles.bind(this));
//     }
  
//     emitParticles() {
//       const { offsetX, offsetY } = event;
//       this.addParticle(offsetX, offsetY);
//     }
  
//     addParticle(x, y) {
//       const particle = new PIXI.Sprite.from(this.imagePath);
//       particle.anchor.set(0.5);
//       particle.x = x;
//       particle.y = y;
//       particle.vx = Math.random() * 2 - 1;
//       particle.vy = Math.random() * 2 - 1;
//       particle.alpha = 1;
//       particle.scale.set(0.5);
  
//       this.container.addChild(particle);
//       this.particles.push(particle);
//     }
  
//     update() {
//       for (let i = this.particles.length - 1; i >= 0; i--) {
//         const particle = this.particles[i];
  
//         particle.x += particle.vx;
//         particle.y += particle.vy;
//         particle.alpha -= 0.01;
  
//         if (particle.alpha <= 0) {
//           this.container.removeChild(particle);
//           this.particles.splice(i, 1);
//         }
//       }
//     }
  
//     start() {
//       this.update()
//       console.log("go girl")
//     }
  
//     stop() {
//       this.app.ticker.stop();
//     }
//   }
  


// export default class ParticleSystem{
//     constructor(partContainer){
//         this.container=partContainer
//     var emitter = new particles.Emitter(

//         // The PIXI.Container to put the emitter in
//         // if using blend modes, it's important to put this
//         // on top of a bitmap, and not use the root stage Container
//         this.container,
//         // Emitter configuration, edit this to change the look
//         // of the emitter
//         {
//             lifetime: {
//                 min: 0.5,
//                 max: 0.5
//             },
//             frequency: 0.008,
//             spawnChance: 1,
//             particlesPerWave: 1,
//             emitterLifetime: 0.31,
//             maxParticles: 1000,
//             pos: {
//                 x: 0,
//                 y: 0
//             },
//             addAtBack: false,
//             behaviors: [
//                 {
//                     type: 'alpha',
//                     config: {
//                         alpha: {
//                             list: [
//                                 {
//                                     value: 0.8,
//                                     time: 0
//                                 },
//                                 {
//                                     value: 0.1,
//                                     time: 1
//                                 }
//                             ],
//                         },
//                     }
//                 },
//                 {
//                     type: 'scale',
//                     config: {
//                         scale: {
//                             list: [
//                                 {
//                                     value: 1,
//                                     time: 0
//                                 },
//                                 {
//                                     value: 0.3,
//                                     time: 1
//                                 }
//                             ],
//                         },
//                     }
//                 },
//                 {
//                     type: 'color',
//                     config: {
//                         color: {
//                             list: [
//                                 {
//                                     value: "fb1010",
//                                     time: 0
//                                 },
//                                 {
//                                     value: "f5b830",
//                                     time: 1
//                                 }
//                             ],
//                         },
//                     }
//                 },
//                 {
//                     type: 'moveSpeed',
//                     config: {
//                         speed: {
//                             list: [
//                                 {
//                                     value: 200,
//                                     time: 0
//                                 },
//                                 {
//                                     value: 100,
//                                     time: 1
//                                 }
//                             ],
//                             isStepped: false
//                         },
//                     }
//                 },
//                 {
//                     type: 'rotationStatic',
//                     config: {
//                         min: 0,
//                         max: 360
//                     }
//                 },
//                 {
//                     type: 'spawnShape',
//                     config: {
//                         type: 'torus',
//                         data: {
//                             x: 0,
//                             y: 0,
//                             radius: 10
//                         }
//                     }
//                 },
//                 {
//                     type: 'textureSingle',
//                     config: {
//                         texture: PIXI.Texture.from('/assets/cat-profile.png')
//                     }
//                 }
//             ],
//         }
//     );
    
//     // Calculate the current time
//     var elapsed = Date.now();
    
//     // Update function every frame
//     var update = function(){
    
//         // Update the next frame
//         requestAnimationFrame(update);
    
//         var now = Date.now();
    
//         // The emitter requires the elapsed
//         // number of seconds since the last update
//         emitter.update((now - elapsed) * 0.001);
//         elapsed = now;
//     };
    
//     // Start emitting
//     emitter.emit = true;
    
//     // Start the update
//     update();
// }
// }