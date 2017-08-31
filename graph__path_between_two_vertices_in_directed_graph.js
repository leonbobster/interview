/*
Find if there is a path between two vertices in a directed graph
Given a Directed Graph and two vertices in it, check whether there is a path from the first given vertex to second. For example, in the following graph, there is a path from vertex 1 to 3. As another example, there is no path from 3 to 0.
We can either use Breadth First Search (BFS) or Depth First Search (DFS) to find path between two vertices. Take the first vertex as source in BFS (or DFS), follow the standard BFS (or DFS). If we see the second vertex in our traversal, then return true. Else return false.
Program to check if there is exist a path between two vertices of a graph.
*/

/**
 * This class represents a directed graph using adjacency list representation
 */
class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.graph = {};
    }

    /**
     * Function to add an edge to graph
     * 
     * @param {*} u 
     * @param {*} v 
     */
    addEdge(u, v) {
        if (this.graph[u] === undefined)
            this.graph[u] = [];
        this.graph[u].push(v);
    }

    /**
     * Use BFS to check path between s and d
     * 
     * @param {*} s 
     * @param {*} d 
     */
    isReachable(s, d) {
        // Mark all the vertices as not visited
        const visited = Array(this.V).fill(false);
        // Create a queue for BFS
        const queue = [];
        // Mark the source node as visited and enqueue it
        queue.push(s);
        visited[s] = true;
        while (queue.length > 0) {
            // Dequeue a vertex from queue 
            const n = queue.shift();
            // If this adjacent node is the destination node, then return true
            if (n === d) return true;
            // Else, continue to do BFS
            for (let v of this.graph[n]) {
                if (false === visited[v]) {
                    visited[v] = true;
                    queue.push(v);
                }
            }

        }
        // If BFS is complete without visited d
        return false;
    }
}

const checkPath = (u, v) => {
    if (graph.isReachable(u, v))
        console.log(`There is a path from ${u} to ${v}`);
    else
        console.log(`There is no path from ${u} to ${v}`);
};

const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(1, 2);
graph.addEdge(3, 3);

checkPath(1, 3);
checkPath(3, 1);


