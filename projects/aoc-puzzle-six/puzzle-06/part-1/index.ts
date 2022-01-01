import { readFileSync } from 'fs';

const puzzleInput = '../input-p6.txt';
const file = readFileSync(puzzleInput, 'utf-8');

const inputFish: number[] = file.split(',').map((e) => {
    return parseInt(e);
});

// const inputFish: number[] = [3, 4, 3, 1, 2]; // test input

// define a fish class
class Fish {
    internalTimer: number;

    constructor(initState: number) {
        this.internalTimer = initState;
    }

    currentTime() {
        console.log(this.internalTimer);
    }

    decreaseTimer(obj: School) {
        if (this.internalTimer === 0) {
            this.internalTimer = 6;
            obj.addFish();
        } else {
            this.internalTimer = this.internalTimer - 1;
        }
    }
}

// create a school of fish class
class School {
    fish: Fish[];

    constructor(inputFish: number[]) {
        this.fish = [];

        inputFish.forEach((f: number) => {
            this.fish.push(new Fish(f));
        });
    }

    // a method for adding a new fish to the object
    addFish() {
        this.fish.push(new Fish(8));
    }

    // start the cycle
    cycleDay() {
        this.fish.forEach((f) => {
            f.decreaseTimer(this);
        });
    }

    // output all the fish cycles states
    printCycles() {
        const fishCycles: number[] = this.fish.map((f: Fish) => {
            return f.internalTimer;
        });
        console.log(fishCycles.length);
    }
}

// create the school of lantern fish
const lanternSchool = new School(inputFish);

// start the cycles and specifiy the day count
function startCycles(days: number) {
    for (let i = 0; i < days; i++) {
        lanternSchool.cycleDay();
    }
}

// start cycles with XX days
startCycles(80);
lanternSchool.printCycles();
