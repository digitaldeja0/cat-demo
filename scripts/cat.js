export default class Cat {
  constructor(joyP, hungerP, healthP) {
    this.joyP = joyP;
    this.hungerP = hungerP;
    this.healthP = healthP;
    this.joy = 10;
    this.hunger = 0;
    this.health = 0;
  }
  mangageJoy() {
    setInterval(() => {
      if (this.joy >= 1 && this.joy <= 10) {
        this.joyP.textContent = this.joy;
        this.joy -= 1;
      } else {
        this.joyP.textContent = this.joy;
      }
    }, 5000); 
  }
}
