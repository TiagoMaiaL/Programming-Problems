'use strict';

/**
 * Given a list of words, finds the words in words that matches the pattern.
 * @param { String[] } words - a list of words.
 * @param { String } pattern - the pattern to be searched in words.
 * @returns { String[] } the words that match the pattern.
 */
function findAndReplacePattern(words, pattern) {
    return words.reduce((previous, word) => {
        const wordToPattern = new Map();
        const patternToWord = new Map();
        let permutation = '';

        for (let i = 0; i < pattern.length; i++) {
            const patternLetter = pattern[i];
            const wordLetter = word[i];

            if (!wordToPattern.has(wordLetter) && !patternToWord.has(patternLetter)) {
                wordToPattern.set(wordLetter, patternLetter);
                patternToWord.set(patternLetter, wordLetter);
            }

            permutation += wordToPattern.get(wordLetter) || '_';
        }

        if (permutation === pattern) {
            previous.push(word);
        }

        return previous;
    }, []);
}

module.exports = { findAndReplacePattern };
