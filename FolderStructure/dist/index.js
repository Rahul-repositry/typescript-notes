"use strict";
//classes
class Player {
    constructor(height, weight, age) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.id = String(Math.random());
    }
}
class Player2 extends Player {
    constructor(height, weight, age, special) {
        super(height, weight, age);
        this.special = special;
    }
}
const abhi = new Player(200, 75, 34);
const abhi2 = new Player2(200, 75, 34, true);
console.log(abhi2);
console.log(abhi);
