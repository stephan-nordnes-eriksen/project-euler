// Champernowne's constant
// Problem 40 
// An irrational decimal fraction is created by concatenating the positive integers:

// 0.12345678910 (1) 112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If dn represents the nth digit of the fractional part, find the value of the following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000



console.log('Euler 40 by stephan')


let n = 1
let stringNumber = ''
while(stringNumber.length < 1000000){
    stringNumber = stringNumber + n
    n = n + 1
}


console.log('answer is', parseInt(stringNumber[0]) 
* parseInt(stringNumber[9]) 
* parseInt(stringNumber[99]) 
* parseInt(stringNumber[999]) 
* parseInt(stringNumber[9999]) 
* parseInt(stringNumber[99999]) 
* parseInt(stringNumber[999999]) )