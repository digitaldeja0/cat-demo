import * as PIXI from "pixi.js";
import * as particles from '@pixi/particle-emitter'
import { heartRef } from "../main";


export const createParticles = async (container)=>{
const cnt = await container
     const emitter =new particles.Emitter(cnt, {
        lifetime: { min: 0.5, max: 3 },
        frequency: 0.1,
        spawnChance: 1,
        particlesPerWave: 1,
        // emitterLifetime: 100,
        maxParticles: 10,
        pos: { x: 0, y: 0 },
        autoUpdate: false,
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

      return emitter
}

