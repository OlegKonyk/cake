const expect = require('chai').expect;

const HIGHEST_POSSIBLE_SCORE = 100;

// using 'counting sort'
function sortScores(unsorted) {
    let counter = unsorted.reduce((acc, score) => {
        if(acc[score]) {
            acc[score]++;
        } else {
            acc[score] = 1;
        }
        return acc;
    }, [])
    .reduceRight((acc, scoreRepeat, scoreVal) => {
        for(let i=0; i<scoreRepeat; i++) {
            acc.push(scoreVal)
        }
        return acc;
    }, [])

    return counter;
}

describe('Sort Scores', function() {
    it('No dupes', function() {
        let  unsortedScores = [37, 89, 41, 65, 91, 53, 37];
        let sorted = sortScores(unsortedScores);
        expect(sorted).to.deep.equal([91, 89, 65, 53, 41, 37, 37]);
    })

    it('With dupes', function() {
        let  unsortedScores = [37, 89, 41, 65, 91, 53];
        let sorted = sortScores(unsortedScores);
        expect(sorted).to.deep.equal([91, 89, 65, 53, 41, 37]);
    })

    it('Empty', function() {
        let  unsortedScores = [];
        let sorted = sortScores(unsortedScores);
        expect(sorted).to.deep.equal([]);
    })
})

/*
Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. 
So far you're using an algorithm that sorts in O(nlgn) time, but players are complaining that their rankings 
aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(nlgn) time.

For example:
    var unsortedScores = [37, 89, 41, 65, 91, 53];
    const HIGHEST_POSSIBLE_SCORE = 100;

    sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
    // returns [91, 89, 65, 53, 41, 37]

We’re defining n as the number of unsortedScores because we’re expecting the number of players to keep climbing.

And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs 
because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will 
stay around the same order of magnitude.
*/