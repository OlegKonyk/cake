const expect = require('chai').expect;

function reverceStringInPlace (inString) {
    // O(n) time and O(1) space 
    let charsArray = inString.split('');
    let leftPointer = 0;
    let rightPointer = charsArray.length-1;

    while (leftPointer < rightPointer) {
        let holder = charsArray[leftPointer];

        charsArray[leftPointer] = charsArray[rightPointer];
        charsArray[rightPointer] = holder;

        rightPointer--;
        leftPointer++;
    }
    return charsArray.join('');
}

describe('Reverse string in place', function() {
    it('7 (odd) characters', function() {
        let actual = reverceStringInPlace('abcdefg')
        let expected = 'gfedcba'
        expect(actual).to.be.equal(expected);
    })
    it('4 (even) characters', function() {
        let actual = reverceStringInPlace('abcd')
        let expected = 'dcba'
        expect(actual).to.be.equal(expected);
    })
    it('1 character', function() {
        let actual = reverceStringInPlace('a')
        let expected = 'a'
        expect(actual).to.be.equal(expected);
    })
    it('0 characters', function() {
        let actual = reverceStringInPlace('')
        let expected = ''
        expect(actual).to.be.equal(expected);
    })
    it('with spaces', function() {
        let actual = reverceStringInPlace('a bc defg')
        let expected = 'gfed cb a'
        expect(actual).to.be.equal(expected);
    })
})

/*
Write a function that takes an array of characters and reverses the letters in place. 
*/