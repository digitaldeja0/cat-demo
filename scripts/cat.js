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
    console.log(this.joyP)
  }
  mangageJoy() {
    let pTag = this.joyP
    let stat = this.joy
    setInterval(() => {
      if (stat >= 6 && stat <= 9 ) {
        pTag.textContent = this.happy;
        stat -= 1;
        // console.log(9)
      } else if(stat >= 3 && stat <= 6){
        pTag.textContent = this.neutral;
        stat -= 1;
        // console.log(6)
      }else {
        stat = 0
        pTag.textContent = this.angry;
        // console.log(0)
      }
    }, 1000); 
  }
  manageHunger(){
    let pTag = this.hungerP
    let stat = this.hunger
    setInterval(() => {
      if (stat >= 6 && stat <= 9 ) {
        pTag.textContent = this.happy;
        stat -= 1;
        // console.log(9)
      } else if(stat >= 3 && stat <= 6){
        pTag.textContent = this.neutral;
        stat -= 1;
        // console.log(6)
      }else {
        stat = 0
        pTag.textContent = this.angry;
        // console.log(0)
      }
    }, 1000); 
  }
  manageHealth(){
    let pTag = this.healthP
    let stat = this.health
    setInterval(() => {
      if (stat >= 6 && stat <= 9 ) {
        pTag.textContent = this.happy;
        stat -= 1;
        // console.log(9)
      } else if(stat >= 3 && stat <= 6){
        pTag.textContent = this.neutral;
        stat -= 1;
        // console.log(6)
      }else {
        stat = 0
        pTag.textContent = this.angry;
        // console.log(0)
      }
    }, 1000); 
  }

}
