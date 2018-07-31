const expect = require('chai').expect;

function mergeRanges(meetings) {
    // complexity: O(n lg n) time and O(n) space
    let mergedRanges = [];
    meetings = meetings.sort((a, b) => {
        return a.startTime - b.startTime;
    });

    for (let meeting of meetings) {
        let lastMerged = mergedRanges[mergedRanges.length - 1];
        if (!lastMerged || lastMerged.endTime < meeting.startTime) {
            mergedRanges.push(meeting);
        } else {
            lastMerged.endTime = lastMerged.endTime < meeting.endTime ?  meeting.endTime : lastMerged.endTime;
        }
    }
    return mergedRanges;
}



describe('Should return an array of condensed ranges', function() {
    it('meetings overlap', function() {
        let input = [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }];
        let result = mergeRanges(input);
        let expected = [{ startTime: 1, endTime: 4 }];
        expect(result).to.deep.equal(expected);
    })
    it('meetings touch', function() {
        let input = [{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }];
        let result = mergeRanges(input);
        let expected = [{ startTime: 5, endTime: 8 }];
        expect(result).to.deep.equal(expected);
    })
    it('meeting contains other meeting', function() {
        let input = [{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }];
        let result = mergeRanges(input);
        let expected = [{ startTime: 1, endTime: 8 }];
        expect(result).to.deep.equal(expected);
    })
    it('meetings stay separate', function() {
        let input = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
        let result = mergeRanges(input);
        let expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
        expect(result).to.deep.equal(expected);
    })
    it('multiple merged meetings', function() {
        let input = [
            { startTime: 1, endTime: 4 },
            { startTime: 2, endTime: 5 },
            { startTime: 5, endTime: 8 },
          ];
        let result = mergeRanges(input);
        let expected = [{ startTime: 1, endTime: 8 }];
        expect(result).to.deep.equal(expected);
    })
    it('meetings not sorted', function() {
        let input = [
            { startTime: 5, endTime: 8 },
            { startTime: 1, endTime: 4 },
            { startTime: 6, endTime: 8 },
        ];
        let result = mergeRanges(input);
        let expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
        expect(result).to.deep.equal(expected);
    })
    it('sample input', function() {
        let input = [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 5 },
            { startTime: 4, endTime: 8 },
            { startTime: 10, endTime: 12 },
            { startTime: 9, endTime: 10 }, 
        ];
        let result = mergeRanges(input);
        let expected = [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 8 },
            { startTime: 9, endTime: 12 },
        ];
        expect(result).to.deep.equal(expected);
    })

})

/*Your company built an in-house calendar tool called HiCal. 
You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. 
In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. 
These integers represent the number of 30-minute blocks past 9:00am.

For example:

{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm


Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:
    [
        { startTime: 0,  endTime: 1 },
        { startTime: 3,  endTime: 5 },
        { startTime: 4,  endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9,  endTime: 10 },
    ]

your function would return:

    [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 8 },
        { startTime: 9, endTime: 12 },
    ]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers 
representing our time ranges. Here we've simplified our times down to the number of 30-minute 
slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. 
In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
*/