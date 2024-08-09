/*
Given a string, write a function "countLetters" that returns the most
common character within the sentence. If there are multiple characters
that appear the most, return the lexicographically smallest one
(e.g. if 'a' and 'b' are both the most common, return 'a' because it
is closest to the beginning of the alphabet). Be sure to exclude spaces
and punctuation.
*/

const countLetters = (str) => {
    // your code here
    const table = {}
    for (let i = 0; i < str.length; i++) {
        let l = str.charAt(i).toLowerCase();
        // if(/*regex goes here*/)
        if (table[l]) {
            table[l]++
        } else {
            table[l] = 1;
        }

    }
    delete (table[' '])
    //use regex to remove space and punctuation
    let greatest = '';
    let count = 0;
    for (let key in table) {
        // console.log(table[key])
        if (table[key] > count) {
            count = table[key];
            greatest = key
        }
        if(table[key] === count){
            if(key < greatest){
                greatest = key
            }
        }
    }
    // console.log("🚀 ~ countLetters ~ greatest:", greatest)
    return greatest
}



console.log(countLetters("The quick, brown fox jumped over the lazy dog.")); // e


/*** Do not change the code after this line ***/

module.exports = {
    countLetters,
};
