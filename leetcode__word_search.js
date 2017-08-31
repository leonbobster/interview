/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const letters = board.reduce((x, r) => x.concat(r), []);
    const graph = buildGraph(board);
    return graph.searchWord(letters, word.split(''));
};

class Graph {
    constructor() {
        this.L = {};
    }

    addEdge(u, v) {
        if (this.L[u.n] === undefined) this.L[u.n] = [];
        if (this.L[v.n] === undefined) this.L[v.n] = [];
        this.L[u.n].push(v);
        this.L[v.n].push(u);
    }

    searchVertex(vert, word, i, used) {
        if (vert.letter !== word[i]) {
            return false;
        }
        if (i === (word.length - 1)) {
            return true;
        }
        if (this.L[vert.n] === undefined) {
            return false;
        }
        used.push(vert.n);
        const next = this.L[vert.n].filter(n => used.indexOf(n.n) === -1);
        for (let n of next) {
            if (this.searchVertex(n, word, i + 1, used)) {
                return true;
            }
            const prevIndex = used.indexOf(vert.n);
            used = used.slice(0, prevIndex + 1);
        }
        return false;
    }

    searchWord(letters, word) {
        for (let i = 0; i < letters.length; i++) {
            const ret = this.searchVertex(new Node(i, letters[i]), word, 0, []);
            if (ret === true)
                return ret;
        }
        return false;
    }
}

class Node {
    constructor(n, letter) {
        this.n = n;
        this.letter = letter;
    }

    toString() {
        return `{${this.n}:${this.letter}}`;
    }
}

function buildGraph(board) {
    const graph = new Graph();
    if (board.length === 0) return;
    const rowLen = board[0].length;
    let k = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < rowLen; j++) {
            const u = new Node(k, board[i][j]);
            if (j + 1 < rowLen) {
                graph.addEdge(u, new Node(k + 1, board[i][j + 1]));
            }
            if (i + 1 < board.length) {
                graph.addEdge(u, new Node(k + rowLen, board[i + 1][j]));
            }
            k++;
        }
    }
    return graph;
}