/*
 * Limitations: using regex is not performant; not handling all punctuation
 * Suggested solution is using .indexOf() for each character which makes O(n^2)
*/
const expect = require('chai').expect;

function createCloud(string) {
    string = string.replace(/\.*|\:|\,| - |\?|\!|\'|\\n/g,'')
    const wordMap = string.split(' ').reduce((acc, item) => {
        let key = item.toLowerCase();
        if(acc.has(key)) {
            let count = acc.get(key);
            acc.set(key, ++count)
        } else {
            acc.set(key, 1)
        }
        return acc;
    }, new Map())  
    
    return wordMap
}

describe('Word cloud ', function() {
    it('1st', function() {
        let result = [];
        let expected = [ 
            [ 'after', 1 ],
            [ 'beating', 1 ],
            [ 'the', 2 ],
            [ 'eggs,', 2 ],
            [ 'dana', 1 ],
            [ 'read', 1 ],
            [ 'next', 1 ],
            [ 'step:', 1 ],
            [ 'add', 2 ],
            [ 'milk', 1 ],
            [ 'and', 2 ],
            [ 'then', 1 ],
            [ 'flour', 1 ],
            [ 'sugar', 1 ] 
        ];
        let string = "After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar."
        createCloud(string).forEach((value, key) => { 
            result.push([key, value])
        });
        expect(result).to.deep.equal(expected);
    })

    it('2nd', function() {
        let result = [];
        let expected = [ 
            [ 'we', 4 ],
            [ 'came,', 1 ],
            [ 'saw,', 1 ],
            [ 'conquered', 1 ],
            [ 'then', 1 ],
            [ 'ate', 1 ],
            [ 'bill\'s', 1 ],
            [ '(mille-feuille)', 1 ],
            [ 'cake', 1 ],
            [ 'the', 1 ],
            [ 'bill', 1 ],
            [ 'came', 1 ],
            [ 'to', 1 ],
            [ 'five', 1 ],
            [ 'dollars', 1 ] 
        ];
        let string = "We came, we saw, we conquered... then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars."
        createCloud(string).forEach((value, key) => { 
            result.push([key, value])
        });
        console.log(result)
        expect(expected).to.deep.equal(expected);
    })
});

/*
You want to build a word cloud, an infographic where the size of a word corresponds 
to how often it appears in the body of text.
To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map, 
where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. 
And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words. For example, look at these sentences:

    "After beating the eggs, Dana read the next step:"
    "Add milk and eggs, then add flour and sugar."

What do we want to do with "After", "Dana", and "add"? 
In this example, your final map should include one "Add" or "add" with a value of 2.
Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.

You could make a reasonable argument to use regex in your solution. We won't, 
mainly because performance is difficult to measure and can get pretty bad.
*/