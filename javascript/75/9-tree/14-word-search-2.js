/*
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent 
cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example 1:

Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], 
        words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Example 2:

Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

 

Constraints:

    m == board.length
    n == board[i].length
    1 <= m, n <= 12
    board[i][j] is a lowercase English letter.
    1 <= words.length <= 3 * 104
    1 <= words[i].length <= 10
    words[i] consists of lowercase English letters.
    All the strings of words are unique.


*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const res = [], trie = {};

    for (let word of words) {
        let curNode = trie;
        for (let char of word) {
            curNode[char] = curNode[char] || {};
            curNode[char].count = curNode[char].count + 1 || 1;
            curNode = curNode[char];
        };
        curNode.end = word;
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (trie[board[row][col]]) traverse(row, col);
        }
    }

    return res;

    function traverse(row, col, node = trie) {
        if (!board[row][col]) return;

        const char = board[row][col], curNode = node[char];
        if (!curNode) return;

        if (curNode.end) {
            res.push(curNode.end);
            let toDelete = trie;
            for (let char of curNode.end) {
                toDelete[char].count--;
                if (!toDelete[char].count) {
                    delete (toDelete[char]);
                    break;
                }
                toDelete = toDelete[char];
            }
            curNode.end = null;
        }

        board[row][col] = 0;
        (col - 1 >= 0) && traverse(row, col - 1, curNode);
        (col + 1 < board[row].length) && traverse(row, col + 1, curNode);
        (row - 1 >= 0) && traverse(row - 1, col, curNode);
        (row + 1 < board.length) && traverse(row + 1, col, curNode);
        board[row][col] = char;
    }
};

