

class Ninja {
    constructor(name){
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }

    punch(ninja){

        this.health -= 5;
        console.log(`${this.name} was punched by ${ninja.name} and lost 5 health!`);
    }

    kick(ninja){
        this.health -= 15;
        console.log(`${this.name} was kicked by ${ninja.name} and lost 15 health`);

    }

    sayName(){
        console.log(`my name is ${this.name}`)
    }
    showStats(){
        console.log(`name:${this.name} speed:${this.speed} strength ${this.strength} health:${this.health}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(this.health);

    }
}
ninja1 = new Ninja("marcelo");
ninja2 = new Ninja("Bill Gates");
ninja3 = new Ninja("Splinter");
ninja1.kick(ninja2);
ninja1.punch(ninja2);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();
