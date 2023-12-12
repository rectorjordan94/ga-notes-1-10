// create a list of normalized words from a paragraph of text.
const sentence = 'the cat in the hat is in the house'

// As a normalized list we should have:
// [ 'THE', 'CAT', 'IN', 'THE', 'HAT', 'IS', 'IN', 'THE', 'HOUSE' ]


// find the word frequencies (how many times does each unique word appear in
// the string).

// As an object, that maps each normalized word to the number of times it occurs
// { THE: 3, CAT: 1, IN: 2, HAT: 1, IS: 1, HOUSE: 1 }