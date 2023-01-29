/*
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

    WordDictionary() Initializes the object.
    void addWord(word) Adds word to the data structure, it can be matched later.
    bool search(word) Returns true if there is any string in the data structure that matches word 
    or false otherwise. word may contain dots '.' where dots can be matched with any letter.

 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

 

Constraints:

    1 <= word.length <= 25
    word in addWord consists of lowercase English letters.
    word in search consist of '.' or lowercase English letters.
    There will be at most 3 dots in word for search queries.
    At most 104 calls will be made to addWord and search.


*/
var WordDictionary = function () {
    this.children = {};
    this.isWord = false;
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let current = this;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!current.children[char]) {
            current.children[char] = new WordDictionary(char);
        }
        current = current.children[char];
    }
    current.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, start = 0, newCurrent = null) {
    let current = this;
    if (newCurrent != null)
        current = newCurrent;
    for (let i = start; i < word.length; i++) {
        let char = word[i];
        if (char == '.') {
            let letters = Object.keys(current.children);
            let res = false;
            for (let letter of letters) {
                res = res || this.search(word, i + 1, current.children[letter]);
            }
            return res;
        } else if (!current.children[char]) {
            return false;
        }
        current = current.children[char];
    }
    return current.isWord;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */