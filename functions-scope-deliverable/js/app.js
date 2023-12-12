// 1. A parameter is a placeholder word that will be replaced by a value the function can manipulate, an argument is the replacement that we pass in
// 2. You can console.log to show the value of the function, however without a return keyword the function doesn't output anything
// 3. Because the default value of a function is undefined, a function only has value when there is a return statement, return also stops a function from running

// const checkPalindrome = (string) => {
//     const reverse = string.toLowerCase().split('').reverse().join('')
//     if (string.toLowerCase() === reverse) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkPalindrome('Racecar'))

// const sumDigits = (num) => {
//     const numberArray = []
//     let str = num.toString()
//     let stringArray = str.split('')
//     for (let i = 0; i < stringArray.length; i++){
//         numberArray.push(parseInt(stringArray[i]))
//     }
//     return numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
// }

// console.log(sumDigits(1234))

// const calculateSide = (sideA, sideB) => {
//     return (Math.sqrt((sideA * sideA) + (sideB * sideB)))
// }

// console.log(calculateSide(8,6))

// const sumArray = (array) => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     return sum
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// const checkPrime = (num) => {
//     const sqrt = Math.sqrt(num)
//     for (let i = 2; i <= sqrt; i++){
//         if ((num % i) === 0) {
//             return false
//         } 
//         return true
//     }
// }

const checkPrimeWhileLoop = (num) => {
    let n = 2
    const sqrt = Math.sqrt(num)
    while (n <= sqrt) {
        if (num % n === 0) {
            return false
        }
        n++
    }
    return true
}

console.log(checkPrimeWhileLoop(9))

const printPrimes = (num) => {
    for (let i = 0; i <= num; i++){
        if (checkPrimeWhileLoop(i) === true) {
            console.log(i)
        }
    }
}

printPrimes(23)