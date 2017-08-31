class Graph {
    constructor(numOfVertices) {
        this.V = numOfVertices;
        this.adjacencyList = {};
    }

    addEdge(v, u) {
        if (this.adjacencyList[v] === undefined)
            this.adjacencyList[v] = [];
        this.adjacencyList[v].push(u);
    }

    DFS(v, visited) {
        if (visited === undefined)
            visited = Array(this.V).fill(false);

        if (visited[v] === true)
            return;

        visited[v] = true;
        console.log(v);

        this.adjacencyList[v].forEach(n => this.DFS(n, visited));
    }

    BFS(v) {
        const visited = Array(this.V).fill(false);
        const queue = [];
        const enqueue = vert => {
            if (visited[vert] === false) {
                visited[vert] = true;
                queue.push(vert);
            }
        };

        enqueue(v);
        while (queue.length > 0) {
            const n = queue.shift();
            console.log(n);
            this.adjacencyList[n].forEach(vert => enqueue(vert));
        }
    }
}

const g = new Graph(4);
g.addEdge(2, 0);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 3);

g.DFS(2);
g.BFS(2);