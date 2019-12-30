const expect = require('chai').expect;

function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const movieLengthsSeen = new Set();

    for (let i = 0; i < movieLengths.length; i++) {
        const firstMovieLength = movieLengths[i];

        const matchingSecondMovieLength = flightLength - firstMovieLength;
        if (movieLengthsSeen.has(matchingSecondMovieLength)) {
            return true;
        }

        movieLengthsSeen.add(firstMovieLength);
    }

    return false;
}

describe('Can two movies fir the flight', function() {
    it('short flight', function() {
        let actual = canTwoMoviesFillFlight([2, 4], 1);
        expect(actual).to.be.false;
    })

    it('long flight', function() {
        let actual = canTwoMoviesFillFlight([2, 4], 6);
        expect(actual).to.be.true;
    })
    
    it('one movie half flight length', function() {
        let actual = canTwoMoviesFillFlight([3, 8], 6);
        expect(actual).to.be.false;
    })

    it('two movies half flight length', function() {
        let actual = canTwoMoviesFillFlight([3, 8, 3], 6);
        expect(actual).to.be.true;
    })

    it('lots of possible pairs', function() {
        let actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
        expect(actual).to.be.true;
    })

    it('only one movie', function() {
        let actual = canTwoMoviesFillFlight([6], 6);
        expect(actual).to.be.false;
    })

    it('no movies', function() {
        let actual = canTwoMoviesFillFlight([], 2);
        expect(actual).to.be.false;
    })
})

/*
You've built an inflight entertainment system with on-demand movie streaming.
Users on longer flights like to start a second movie right when their first one ends, 
but they complain that the plane usually lands before they can see the ending. 
So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers 
movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in 
movieLengths whose sum equals flightLength.

When building your function:
    - Assume your users will watch exactly two movies
    - Don't make your users watch the same movie twice
    - Optimize for runtime over memory
*/