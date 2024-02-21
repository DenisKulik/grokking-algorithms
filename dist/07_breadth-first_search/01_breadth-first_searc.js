"use strict";
const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];
function search(name) {
    const searchQueue = [];
    searchQueue.push(name);
    const searched = [];
    while (searchQueue.length) {
        const person = searchQueue.shift();
        if (!searched.includes(person)) {
            searched.push(person);
            searchQueue.push(...graph[person]);
        }
    }
    return searched;
}
search('you');
