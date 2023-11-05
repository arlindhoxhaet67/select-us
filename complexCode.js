/* 
   Filename: complexCode.js
   
   Description: This complex code is a simulation of a virtual pet game. The user can adopt a virtual pet, feed, play, and take care of it. The pet's health, hunger, and happiness are tracked and can be affected by the user's actions. The game also includes random events, such as the pet getting sick or finding treasure. The code includes multiple classes, event handlers, and various functions to handle the game logic.

   Note: This is a fictional code to demonstrate complexity, creativity, and professional code writing. It may not be an actual complete implementation.
*/

// Class representing a virtual pet
class VirtualPet {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 0;
    this.happiness = 100;
  }

  feed() {
    if (this.hunger < 50) {
      this.hunger = 0;
      console.log(`${this.name} happily ate the food!`);
    } else {
      console.log(`${this.name} is not hungry right now.`);
    }
  }

  play() {
    if (this.happiness < 50) {
      this.happiness += 10;
      console.log(`${this.name} enjoyed playing with you!`);
    } else {
      console.log(`${this.name} is already very happy.`);
    }
  }

  update() {
    if (this.hunger < 100) {
      this.hunger++;
    } else {
      this.health--;
    }

    if (this.happiness > 0) {
      this.happiness--;
    } else {
      this.health--;
    }
  }

  checkHealth() {
    if (this.health === 0) {
      console.log(`${this.name} has died. Game over!`);
    } else if (this.health < 20) {
      console.log(`${this.name} is very sick. Take care of it!`);
    } else if (this.health < 50) {
      console.log(`${this.name} is not feeling well.`);
    } else {
      console.log(`${this.name} is healthy.`);
    }
  }
}

// Class representing the virtual pet game
class VirtualPetGame {
  constructor() {
    this.pet = null;
    this.events = ['sick', 'treasure'];
  }

  createPet(name) {
    this.pet = new VirtualPet(name);
    console.log(`${name} is your new virtual pet!`);
  }

  simulateDay() {
    let eventChance = Math.random();

    if (eventChance < 0.2) {
      this.triggerRandomEvent();
    }

    this.pet.update();
    this.pet.checkHealth();
  }

  triggerRandomEvent() {
    let randomEvent = this.events[Math.floor(Math.random() * this.events.length)];

    switch (randomEvent) {
      case 'sick':
        this.pet.health -= 20;
        console.log(`${this.pet.name} got sick!`);
        break;
      case 'treasure':
        let treasureAmount = Math.floor(Math.random() * 500);
        this.pet.happiness += treasureAmount;
        console.log(`${this.pet.name} found a treasure, gaining ${treasureAmount} happiness!`);
        break;
    }
  }
}

// Event handler for feeding the pet
function onFeedClick() {
  if (game.pet) {
    game.pet.feed();
  } else {
    console.log('Please create a pet first!');
  }
}

// Event handler for playing with the pet
function onPlayClick() {
  if (game.pet) {
    game.pet.play();
  } else {
    console.log('Please create a pet first!');
  }
}

// Event handler for simulating a day
function onSimulateDayClick() {
  if (game.pet) {
    game.simulateDay();
  } else {
    console.log('Please create a pet first!');
  }
}

// Usage
const game = new VirtualPetGame();
game.createPet('Buddy');

// Example event listeners (not included in 200 lines count)
document.getElementById('feedButton').addEventListener('click', onFeedClick);
document.getElementById('playButton').addEventListener('click', onPlayClick);
document.getElementById('simulateDayButton').addEventListener('click', onSimulateDayClick);