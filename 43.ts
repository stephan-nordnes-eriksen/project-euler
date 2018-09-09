// Sub-string divisibility
// Problem 43 
// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

class eu43 {
    static solve() {
        function permute(permutation: Array<any>) {
            var length = permutation.length,
                result = [permutation.slice()],
                c = new Array(length).fill(0),
                i = 1, k, p;
          
            while (i < length) {
              if (c[i] < i) {
                k = i % 2 && c[i];
                p = permutation[i];
                permutation[i] = permutation[k];
                permutation[k] = p;
                ++c[i];
                i = 1;
                result.push(permutation.slice());
              } else {
                c[i] = 0;
                ++i;
              }
            }
            return result;
          }
        function allPanditial0to9numbers() {
            let allNumbers = [0,1,2,3,4,5,6,7,8,9]
            return permute(allNumbers).filter(e => {
                return e[0] !== 0
            })
        }
        let sum = allPanditial0to9numbers().filter(num => {
            return (Number(num.slice(1,4).join(''))%2) === 0
                && (Number(num.slice(2,5).join(''))%3) === 0
                && (Number(num.slice(3,6).join(''))%5) === 0
                && (Number(num.slice(4,7).join(''))%7) === 0
                && (Number(num.slice(5,8).join(''))%11) === 0
                && (Number(num.slice(6,9).join(''))%13) === 0
                && (Number(num.slice(7,10).join(''))%17) === 0
        })
        .map(e => {
            return Number(e.join(''))
        })
        .reduce((prev, e) => {
            return e + prev
        }, 0)
        console.log('Sum', sum)
    }
}
eu43.solve()
