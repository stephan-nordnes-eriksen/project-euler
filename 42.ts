// Coded triangle numbers
// Problem 42 
// The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

// Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

import { readFile } from 'fs'

let knownTriangleNumbers: {[s: number]: boolean; } = { 1: true }
let largestKnownNumber = 1
let lastTriangleN = 1
function isTriangleNumbers(testNumber: number) {
    while(testNumber > largestKnownNumber){
        lastTriangleN = lastTriangleN + 1 
        let nextTriangleNumber = (lastTriangleN * (lastTriangleN + 1))/2
        knownTriangleNumbers[nextTriangleNumber] = true
        largestKnownNumber = nextTriangleNumber
    }
    return knownTriangleNumbers[testNumber]
}

let triangleWordCount = 0
readFile('./p042_words.txt',(err, data) => {
    let words = data.toString().split(',').map(e => e.slice(1, -1))
    words.forEach(word => {
        let wordSum = word.split('').reduce((char, curr)=>{
            return char + curr.charCodeAt(0) - 64
        },0)
        if(isTriangleNumbers(wordSum)){
            triangleWordCount = triangleWordCount + 1
        }
    })
    console.log("triangleWordCount", triangleWordCount)
})
// let words = 