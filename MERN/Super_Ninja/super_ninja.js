class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`${this.name}'s stats:`)
        console.log(`Health: ${this.health}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        const message = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"