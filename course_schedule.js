class Graph {
    constructor(numCourses) {
        this.numCourses = numCourses;
        this.L = {};
        for (let i = 0; i < numCourses; i++)
            this.L[i] = [];
    }

    addEdge(u, v) {
        this.L[u].push(v);
    }

    isCyclicUtil(v, visited, stack) {
        visited[v] = true;
        stack[v] = true;
        for (let n of this.L[v]) {
            if (visited[n] === false) {
                if (this.isCyclicUtil(n, visited, stack)) {
                    return true;
                }
            } else if (stack[n] === true) {
                return true;
            }
        }
        stack[v] = false;
        return false;
    }

    isCyclic() {
        const visited = Array(this.numCourses).fill(false);
        const stack = Array(this.numCourses).fill(false);
        for (let node = 0; node < this.numCourses; node++) {
            if (visited[node] === false && this.isCyclicUtil(node, visited, stack))
                return true;
        }
        return false;
    }
}

function buildGraph(numCourses, prerequisites) {
    const graph = new Graph(numCourses);
    prerequisites.forEach(p => graph.addEdge(p[0], p[1]));
    return graph;
}


const numCourses = 2;
const prerequisites = [[1, 0], [0, 1]];
const graph = buildGraph(numCourses, prerequisites);
console.log(graph);
console.log(!graph.isCyclic());