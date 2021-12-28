// classes

class Professional {
    name: string;
    job: string;
    private id: number; // only accesible from within this class
    protected profId?: number; // only accesible from within class and subclasses
    public skills?: string[]; // public is the default

    // object constructor (called when instantiating a new object)
    constructor(name: string, job: string, id: number, skills?: string[]) {
        this.name = name;
        this.job = job;
        this.id = id;
        if (skills !== undefined) {
            this.skills = skills;
        } else {
            this.skills = [];
        }

        console.log(
            `New professional: ${this.name}, ${this.job}, ${this.id}, ${this.skills}`
        );
    }

    // object method
    addSkill(skill: string): string | string[] {
        if (this.skills !== undefined) {
            this.skills.push(skill);
            return this.skills;
        } else {
            console.log('addSkill() method did not push to the array');
            return skill;
        }
    }

    // static method
    // you can call a static method without instantiating an object
    // so just calling Professional.info() returns the info
    static info(): string {
        return 'I am a Professional class. Use me for professional employees.';
    }
}

const Martin = new Professional('Martin', 'Developer', 1001);
console.log(Martin.skills); // []

Martin.addSkill('Front-end');
console.log(Martin.skills); // ["Front-end"]

// error: private property
// Martin.id = 100;
// console.log(Martin.id);

// error: protected property
// Martin.profId = 10;
// console.log(Martin.profId);
