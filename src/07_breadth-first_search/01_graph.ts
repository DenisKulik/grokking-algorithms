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
