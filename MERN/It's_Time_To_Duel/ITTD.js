class Card {
    cunstructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        //reduce target res by power
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(`${this.name} attacks ${target.name} for ${this.power} damage`);
            if (target.res <= 0) {
                console.log(`${target.name} is destroyed`);
            }
            else {
                console.log(`${target.name} has ${target.res} resilience left`)
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitud) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitud = magnitud;
    }
    play(target) {
        if (target instanceof Unit) {
            console.log(this.text);
            if(this.stat == 1){
                target.res +=this.magnitud;
            }
            else if(this.stat == 2){
                target.power += this.magnitud;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }

}

const RBN = new Unit("Red Belt Ninja", 3, 3, 4)
const BBN = new Unit("Black Belt Ninja", 4, 5, 4)
const HA = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", 1, 3)
const UPR = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", 1, -2)
const PP = new Effect("Pair Programming", 3, "Increase target's power by 2", 2, 2)
console.log(RBN)
HA.play(RBN)
console.log(RBN)
UPR.play(RBN)
console.log(RBN)
PP.play(RBN)
console.log(RBN)
RBN.attack(BBN)
console.log(RBN)
console.log(BBN)