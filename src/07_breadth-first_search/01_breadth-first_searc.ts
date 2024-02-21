interface Graph<T> {
    [key: string]: T[]
}

const graph: Graph<string> = {}
graph.you = ['alice', 'bob', 'claire']
graph.bob = ['anuj', 'peggy']
graph.alice = ['peggy']
graph.claire = ['thom', 'jonny']
graph.anuj = []
graph.peggy = []
graph.thom = []
graph.jonny = []

function search(name: string): string[] {
    const searchQueue: string[] = []
    searchQueue.push(name)
    const searched: string[] = []
    while (searchQueue.length) {
        const person = searchQueue.shift()!
        if (!searched.includes(person)) {
            searched.push(person)
            searchQueue.push(...graph[person])
        }
    }
    return searched
}

search('you')
