const expect = require('chai').expect;

function isSingleRiffle(shuffledDeck, half1, half2) {
    // if needed would add input validation (shuffledDeck.length === 52; half1 & half2 length > 0)
    // Complexity O(n) time and O(1) space
    let half1_pointer = 0;
    let half2_pointer = 0;
    for (let i=0; i<shuffledDeck.length; i++) {
        if (shuffledDeck[i] === half1[half1_pointer]) {
            half1_pointer++;
        } else if (shuffledDeck[i] === half2[half2_pointer]) {
            half2_pointer++;
        } else {
            return false;
        }
    }
    return true;
}

describe('isSingleRiffle of 52 cards deck', function() {
    before(function() {
        this.half1 = [
            23, 51, 8, 41, 52, 20, 35, 46, 6, 34,
            45, 3, 26, 36, 48, 37, 29, 40, 21, 9,
            16, 50, 25, 1, 47, 18
        ];
        this.half2 = [
            11, 39, 7, 4, 44, 38, 30, 32, 33, 17, 
            22, 49, 27, 43, 5, 24, 42, 31, 15, 2,
            14, 12, 10, 28, 19, 13
        ];
    })
    it('positive', function() {
        const shuffledDeck = [
            23, 11, 51, 39, 8, 7, 41, 4, 52, 44, 
            20, 38, 35, 30, 46, 32, 6, 33, 34, 
            17, 45, 22, 3, 49, 26, 27, 36, 43, 
            48, 5, 37, 24, 29, 42, 40, 31, 21, 
            15, 9, 2, 16, 14, 50, 12, 25, 10, 1, 
            28, 47, 19, 18, 13
        ];

        let result = isSingleRiffle(shuffledDeck, this.half1, this.half2)
        expect(result).to.be.true;
    })

    it('negative (begining)', function() {
        const shuffledDeck = [
            49, 11, 51, 39, 8, 7, 41, 4, 52, 44, 
            20, 38, 35, 30, 46, 32, 6, 33, 34, 
            17, 45, 22, 3, 23, 26, 27, 36, 43, 
            48, 5, 37, 24, 29, 42, 40, 31, 21, 
            15, 9, 2, 16, 14, 50, 12, 25, 10, 1, 
            28, 47, 19, 18, 13
        ];
        let result = isSingleRiffle(shuffledDeck, this.half1, this.half2)
        expect(result).to.be.false;
    })

    it('negative (end)', function() {
        const shuffledDeck = [
            23, 11, 51, 39, 8, 7, 41, 4, 52, 44, 
            20, 38, 35, 30, 46, 32, 6, 33, 34, 
            17, 13, 22, 3, 49, 26, 27, 36, 43, 
            48, 5, 37, 24, 29, 42, 40, 31, 21, 
            15, 9, 2, 16, 14, 50, 12, 25, 10, 1, 
            28, 47, 19, 18, 45
        ];
        let result = isSingleRiffle(shuffledDeck, this.half1, this.half2)
        expect(result).to.be.false;
    })

    it('negative (mid)', function() {
        const shuffledDeck = [
            23, 11, 51, 39, 8, 7, 41, 4, 52, 44, 
            20, 38, 35, 30, 46, 32, 6, 33, 34, 
            17, 13, 22, 3, 29, 26, 27, 36, 43, 
            48, 5, 37, 24, 49, 42, 40, 31, 21, 
            15, 9, 2, 16, 14, 50, 12, 25, 10, 1, 
            28, 47, 19, 18, 45
        ];
        let result = isSingleRiffle(shuffledDeck, this.half1, this.half2)
        expect(result).to.be.false;
    })
})

/*
I figured out how to get rich: online poker.
I suspect the online poker game I'm playing shuffles cards by doing a single riffle.

To prove this, let's write a function to tell us if a full deck of cards shuffledDeck
is a single riffle of two other halves half1 and half2.

We'll represent a stack of cards as an array of integers in the range 1..52
(since there are 52 distinct cards in a deck).

Why do I care? A single riffle is not a completely random shuffle. 
If I'm right, I can make more informed bets and get rich and finally prove to my ex that 
I am not a "loser with an unhealthy cake obsession" (even though it's too late now 
because she let me go and she's never getting me back).
*/