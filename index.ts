// Integer right triangles
// Problem 39 
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

////

/*

|\
| \
|  \
|   \
|_   \
|_|___\

*/

// console.log('Euler 39 by stephan')
// let p = 3
// let previousLonges = 0
// let previousP = 0

// while(p <= 1000) {
//     let solutions = []
//     let x = 1
//     let y = 1
//     let z = p - 2
//     // We get duplicates for mirrored

//     while(x <= (p-2)){
//         while(x + y <= (p-1)){
//             while(x + y + z <= p){
//                 if(x*x + y*y === z * z ){
//                     solutions.push([x,y,z])
//                 }
//                 z = z + 1 
//             }
//             y = y + 1
//             z = p - x - y
//         }
//         x = x + 1
//         y = 1
//         z = p - x - y
//     }
//     if(p === 120){
//         console.log('Solutions for',p, 'is:', solutions)
//     }
//     if(solutions.length > previousLonges){
//         previousLonges = solutions.length
//         previousP = p
//     }
//     p = p + 1
// }

// console.log('Solution with most answers is', previousP, 'with number of solutions', previousLonges/2) // /2 because we add both rotations of the triangle.

