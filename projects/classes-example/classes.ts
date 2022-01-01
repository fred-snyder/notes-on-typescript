// define a skills type
type skill = {
    id: number;
    name: string;
    active: boolean;
};

class Filter {
    skills: skill[];
    active: boolean;

    constructor(skills: skill[], state: boolean) {
        this.skills = skills;
        this.active = state;
    }
}

// define a Dev type according to the expected json structure
type Dev = {
    userId: number;
    name: string;
    skills: string[];
    color: string;
    roles: string;
};

class Developer {
    person: Dev;
    visible: boolean;

    constructor(d: Dev) {
        this.person = d;
        this.visible = true;
    }
}
