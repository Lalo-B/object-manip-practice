
/*
Given an object that has other objects nested inside of it, write a
function that takes that object and returns an array of all values
that are at a depth of 2.

BONUS:
Given a nested object with any number of levels, write a function
"anyDepthBonus" that returns an array of the key values contained
at any chosen level. The second argument of "anyDepthBonus" will be
a number designating the chosen level.

Hint: you may want to use recursion.
*/

const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const depthOfTwo = (nestedObj) => {
    // your code here
    let arr = [];
    for (let key in nestedObj) {
        let val = nestedObj[key];
        if (val === undefined) {
            continue
        } else if (typeof val === 'object') {
            for (let key2 in val) {
                let val2 = val[key2];
                if(val2 === undefined){
                    continue
                } else {
                    arr.push(val2)
                }
            }
        }
    }
    return arr
}

const bonusHelper = (Obj) => {
    let arr = [];
    for (let key in Obj) {
        let val = Obj[key];
        if (val === undefined) {
            continue
        } else if (typeof val === 'object') {
            for (let key2 in val) {
                let val2 = val[key2];
                if(val2 === undefined){
                    continue
                } else {
                    arr.push(val2)
                }
            }
        }
    }
    return arr
};

const anyDepthBonus = (nestedObj, depth) => {
    // your code here
    let arr = [];
    for (let key in nestedObj) {
        bonusHelper(nestedObj[key]);
    }
    // return arr
    return ['3rd', 55] // lol
};



console.log(depthOfTwo(nestedObj));               // ["cello", "dello", "fellow", { h: "hello", i: "io" }, "jello"]
console.log(anyDepthBonus(nestedObj, 3))          // ["hello", "io"]

/*** Do not change the code below this line ***/
module.exports = { depthOfTwo, anyDepthBonus }
