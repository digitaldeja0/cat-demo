export default class Cat {
  constructor(joyP, hungerP, healthP) {
    this.joyP = joyP;
    this.hungerP = hungerP;
    this.healthP = healthP;
    this.joy = 9;
    this.hunger = 9;
    this.health = 9;
    this.happy = "😊"
    this.neutral = "😨"
    this.angry = "😡"
    // console.log(this.joyP)
  }
  updateJoy(newJoy){
    this.joy += newJoy
    if(this.joy>=9){
      this.joy = 9
    }
    console.log(this.joy)
  }
  updateHunger(newHunger){
    this.hunger += newHunger
    if(this.hunger>=9){
      this.hunger = 9
    }
    console.log(this.hunger)
  }
  updateHealth(newHealth){
    this.health += newHealth
    if(this.health>=9){
      this.health = 9
    }
    console.log(this.health)
  }
  mangageJoy() {
    let pTag = this.joyP
    setInterval(() => {
      if (this.joy >= 6 && this.joy <= 9 ) {
        pTag.textContent = this.happy;
        this.joy -= 1;
        // console.log(9)
      } else if(this.joy >= 3 && this.joy <= 6){
        pTag.textContent = this.neutral;
        this.joy -= 1;
        // console.log(6)
      }else {
        this.joy = 0
        pTag.textContent = this.angry;
        // console.log(0)
      }
    }, 3000); 
  }
  manageHunger(){
    let pTag = this.hungerP
    setInterval(() => {
      if (this.hunger >= 6 && this.hunger <= 9 ) {
        pTag.textContent = this.happy;
        this.hunger -= 1;
        // console.log(9)
      } else if(this.hunger >= 3 && this.hunger <= 6){
        pTag.textContent = this.neutral;
        this.hunger -= 1;
        // console.log(6)
      }else {
        this.hunger = 0
        pTag.textContent = this.angry;
        // console.log(0)
      }
    }, 2000); 
  }
  manageHealth(){
    let pTag = this.healthP
    setInterval(() => {
      if (this.health >= 6 && this.health <= 9 ) {
        pTag.textContent = this.happy;
        this.health -= 1;
        // console.log(9)
      } else if(this.health >= 3 && this.health <= 6){
        pTag.textContent = this.neutral;
        this.health -= 1;
        // console.log(6)
      }else {
        this.health = 0
        pTag.textContent = this.angry;
        // console.log(0)
      }
    }, 5500); 
  }

}
