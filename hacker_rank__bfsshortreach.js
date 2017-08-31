const fs = require('fs');

let input_stdin_array = "";
let input_currentline = 0;

fs.readFile('./bfsshortreach_input06.txt', 'ascii', (err, contents) => {
    input_stdin_array = contents.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var q = parseInt(readLine());
    for (var a0 = 0; a0 < q; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);

        const graph = new Graph(n);

        for (var a1 = 0; a1 < m; a1++) {
            var u_temp = readLine().split(' ');
            var u = parseInt(u_temp[0]);
            var v = parseInt(u_temp[1]);

            graph.addEdge(u, v);
        }
        var s = parseInt(readLine());

        graph.BFS(s);
    }
}

class Graph {
    constructor(numOfVertices) {
        this.V = numOfVertices;
        this.adjacencyList = {};
        for (let i = 1; i <= numOfVertices; i++)
            this.adjacencyList[i] = [];
    }

    addEdge(u, v) {
        if (this.adjacencyList[u] === undefined)
            this.adjacencyList[u] = [];
        this.adjacencyList[u].push(v);
        this.adjacencyList[v].push(u);
    }

    BFS(start) {
        const visited = Array(this.V + 1).fill(-1);
        const queue = [];

        queue.push(start);
        visited[start] = 0;

        while (queue.length > 0) {
            const n = queue.shift();
            this.adjacencyList[n].forEach(vert => {
                if (visited[vert] === -1) {
                    queue.push(vert);
                    visited[vert] = visited[n] + 1;
                }
            });
        }

        visited.splice(start, 1);
        console.log(visited.slice(1).map(x => x === -1 ? x : x * 6).join(' '));
    }
}