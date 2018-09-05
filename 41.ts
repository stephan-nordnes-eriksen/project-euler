// Pandigital prime
// Problem 41 
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?



console.log('Euler 41 by stephan')


// Prime number generator

// log(n) -> 1; only previous primes

let primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
let startNumber = primes[primes.length-1] + 2
function nextPrime(){
    let prime = 0
    while(prime === 0){
        let testerNumber = 1
        let tester = primes[testerNumber]
        let possiblePrime = true
        let sqrtStartNumber = Math.sqrt(startNumber)
        while(possiblePrime && tester <= sqrtStartNumber){
            if(startNumber % tester === 0){
                // Not prime
                possiblePrime = false
            }
            testerNumber = testerNumber + 1
            tester = primes[testerNumber]
        }
        if(possiblePrime){
            prime = startNumber
        }
        startNumber = startNumber + 2
    }

    primes.push(prime)
    return prime
}

function isPandigital(number: number){
    let usedDigit = {}
    let isPossiblyPandigital = true
    let numberAsString = number.toString()
    
    let notPandigital = numberAsString.split('').some(digit => {
        if(usedDigit[digit]){
            return true
        } else {
            usedDigit[digit] = true
            return false
        }
    })

    if(notPandigital){
        return false
    }

    for(let i = 1; i <= numberAsString.length; i++){
        if(!usedDigit['' + i]){
            isPossiblyPandigital = false
        }
    }
    return isPossiblyPandigital
}

console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())
console.log('nextPrime', nextPrime())

console.log('isPandigital(1)', isPandigital(1))
console.log('isPandigital(21)', isPandigital(21))
console.log('isPandigital(215)', isPandigital(215))
console.log('isPandigital(2143)', isPandigital(2143))

let currentPrime = nextPrime()
let biggestPandigital = 1
let loopCount = 0
while(currentPrime < 1000000000){
    if(isPandigital(currentPrime)){
        biggestPandigital = currentPrime
    }
    currentPrime = nextPrime()
    loopCount = loopCount + 1
    if(loopCount%100000 === 0){
        console.log('loopcount', loopCount, 'currentPrime', currentPrime)
    }
}

console.log('Biggest pandigital prime is', biggestPandigital)