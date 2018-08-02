const expect = require('chai').expect;

function mergeArrays (array_1, array_2) {
    let array_1_index = 0
    let array_2_index = 0
    let sorted = [];
    if(!array_1.length || !array_2.length) {
        sorted = array_1.length > !array_2.length ? array_1 : array_2;
        return sorted; 
    }
    while( (array_1_index<array_1.length) || (array_2_index<array_2.length) ) {
        if (array_1[array_1_index] < array_2[array_2_index]) {
            sorted.push(array_1[array_1_index]);
            array_1_index++;
        } else {
            sorted.push(array_2[array_2_index]);
            array_2_index++;
        }        
    }

    return sorted;
}

describe('mergeArrays', function() {
    it('Same length arrays', function() {
        let array1 = [3, 4, 6, 10, 11, 15];
        let array2 = [1, 5, 8, 12, 14, 19];
        let actual = mergeArrays(array1, array2);
        let expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
        expect(expected).to.deep.equal(actual);
    })

    it('Different length arrays', function() {
        let array1 = [3, 4, 6, 10];
        let array2 = [1, 5, 8, 12, 14, 19];
        let actual = mergeArrays(array1, array2);
        let expected = [1, 3, 4, 5, 6, 8, 10, 12, 14, 19];
        expect(expected).to.deep.equal(actual);
    })

    it('Same digits in arrays', function() {
        let array1 = [3, 4, 4, 4, 6, 10];
        let array2 = [1, 4, 5, 8, 12, 14, 19];
        let actual = mergeArrays(array1, array2);
        let expected = [1, 3, 4, 4, 4, 4, 5, 6, 8, 10, 12, 14, 19];
        expect(expected).to.deep.equal(actual);
    })

    it('Empty array (1st) arrays', function() {
        let array1 = [];
        let array2 = [0, 5, 8, 12, 14, 19];
        let actual = mergeArrays(array1, array2);
        let expected = [0, 5, 8, 12, 14, 19];
        expect(expected).to.deep.equal(actual);
    })

    it('Empty array (2nd) arrays', function() {
        let array1 = [0, 5, 8, 12, 14, 19];
        let array2 = [];
        let actual = mergeArrays(array1, array2);
        let expected = [0, 5, 8, 12, 14, 19];
        expect(expected).to.deep.equal(actual);
    })
})


/*
In order to win the prize for most cookies sold, my friend Alice and I 
are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. 
Write a function to merge our arrays of orders into one sorted array.
*/