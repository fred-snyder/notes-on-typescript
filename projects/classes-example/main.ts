// store data as .ts file and export constant
import data from './data';

import './classes';

// a map of all the unique skills
// boolean value represents the filter state // default false (inactive)
const skills = new Map<string, boolean>();

// log out all the developer data
console.log(data.developers);

// initialize the filters and developers
const fltr: Filter = { skills: [], active: false };
const devs: Developer[] = [];

createDevs(data.developers);
createFilter(data.developers);

// function that creates the list of developer objects
function createDevs(d: Dev[]) {
    d.forEach((e) => {
        devs.push(new Developer(e));
    });
}

// function that creates the map with all the unique filters
function createFilter(d: Dev[]) {
    d.forEach((e: Dev) => {
        e.skills.forEach((sk: string) => {
            skills.set(sk, false);
        });
    });
}

// add all the filters to the Filter object
function addFilters(skills: Map<string, boolean>) {
    let id: number = 0;
    // convert map of unique skills to skill[]
    for (let [skl, act] of skills.entries()) {
        fltr.skills.push({ id: id, name: skl, active: act });
        id++;
    }
}

addFilters(skills);

// log out the data
console.log('Filter object', fltr);
console.log('Devs: ', devs);
console.log('Skills', skills);
