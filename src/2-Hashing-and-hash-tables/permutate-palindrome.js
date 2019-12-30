const expect = require('chai').expect;

function hasPalindromePermutation (input) {
    let tracker = {};
    let isEven = input.length%2 === 0;
    for(let i=0; i<input.length; i++) {
        let char = input[i];
        if (tracker[char]) {
            delete tracker[char]
        } else {
            tracker[char] = 1
        }
    }
    let keys = Object.keys(tracker).length;
    return isEven ? keys === 0 : keys === 1;
    // cleaner solution can be done with new Set() => set.has & set.delete & set.add;
}

describe('Has palindrome permutation', function() {
    it('permutation with odd number of chars', function() {
        expect(hasPalindromePermutation('aabcbcd')).to.be.true;
    })
    it('permutation with even number of chars', function() {
        expect(hasPalindromePermutation('aabccbdd')).to.be.true;
    })
    it('no permutation with odd number of chars', function() {
        expect(hasPalindromePermutation('aabcd')).to.be.false;
    })
    it('no permutation with even number of chars', function() {
        expect(hasPalindromePermutation('aabbcd')).to.be.false;
    })
    it('empty string', function() {
        expect(hasPalindromePermutation('')).to.be.true;
    })
    it('one character string', function() {
        expect(hasPalindromePermutation('a')).to.be.true;
    })
})

/*
Write an efficient function that checks whether any permutation of an input string is a palindrome.
You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false


"But 'ivicc' isn't a palindrome!"
If you had this thought, read the question again carefully. We're asking if any permutation of the 
string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. 
Jumping in with a flawed understanding of the problem doesn't look good in an interview.
*/