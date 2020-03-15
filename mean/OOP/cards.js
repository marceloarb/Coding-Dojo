let suits = ['Hearts','Diamons','Clubs','Spades'];
let values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen','King', 'Ace'];

class Card{
    constructor(suit,value){
        this.suit = suit;
        this.value = value;

    }
}

class Deck{
    constructor(suits,values){
        this.cards = [];
        for (let suit of suits){
            for (let value of values){
                this.cards.push(new Card(suit, value));
            }
        }
        return this.deck;
    }
    
    shuffle(){
        let counter = this.cards.length;
        let i;
        let temp;

        while(counter){
            i = Math.floor(Math.random() * counter--);
            temp = this.cards[counter];
            this.cards[counter] = this.cards[i];
            this.cards[i]=temp;
        }
        return this.cards;
            
    }
        


    deal(){
        let hand = [];
        while(hand.length < 2) {
            hand.push(this.cards.pop());
        }
        return hand;
    }
    
}
class Player extends Deck{
    constructor(suits,values,name){
        super(suits,values);
        this.name = name;
        this.hand = deck.deal();

    }
    discard(){
        this.hand.pop();
    }
    
}

let deck = new Deck(suits,values);
deck.shuffle();
deck.deal();
let marcelo = new Player(suits,values,'marcelo');
console.log(marcelo.hand);
marcelo.discard();
console.log(marcelo.hand);



