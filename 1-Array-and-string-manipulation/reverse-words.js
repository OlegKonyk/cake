const expect = require('chai').expect;

function reverseWords(message) {
    // Complexity O(n) time and O(1) space
    let left = 0;
    reverseChars(message, 0, message.length -1)
    
    for (let i=0; i<message.length; i++) {
        let cerrentChar = message[i];
        if (cerrentChar === ' ') {
            reverseChars(message,  left, i-1);
            left = i+1;
        }
        if (i == message.length-1) {
            reverseChars(message,  left, i)
            left = i+1;
        }
    }
    return message.join('');
}

function reverseChars(msg, _left, _right) {
    while (_left < _right) {
        let temp = msg[_left];

        msg[_left] = msg[_right];
        msg[_right] = temp;
        _left++;
        _right--;
    }
}

describe('Reverse words', function() {
    it('3 words', function() {
        var message = [ 
            'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l' ];
        let actual = reverseWords(message);
        let expected = 'steal pound cake';
        expect(expected).to.be.equal(actual);
    })
})



/*
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, 
worried it's a plot to break into a major European National Cake Vault. 
The message has been mostly deciphered, but all the words are backward! 
Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters 
and reverses the order of the words in place.

When writing your function, assume the message contains only letters and spaces, 
and all words are separated by one space.
*/