// // You are given an array of integers. You should find the sum of the integers
// // with even indexes (0th, 2nd, 4th...). Then multiply this summed number and the final element of the array together. Don't forget that the first element has an index of 0.

// // For an empty array, the result will always be 0 (zero).

// // Input: A list of integers.
// // Output: The number as an integer.

// describe('Sum of even num in Array then multiply with last num in array.', () => {
//   it('should be return 0 from input []', () => {
//     expect(0).toEqual(evenLast([]))
//   })

//   it('should be return 30 from input [0, 1, 2, 3, 4, 5]', () => {
//     expect(30).toEqual(evenLast([0, 1, 2, 3, 4, 5]))
//   })

//   it('should be return 36 from input [0, 1, 2, 3, 4, 6]', () => {
//     expect(36).toEqual(evenLast([0, 1, 2, 3, 4, 6]))
//   })

//   it('should be return 36 from input [0, 1, 2, 3, 4, 7]', () => {
//     expect(42).toEqual(evenLast([0, 1, 2, 3, 4, 7]))
//   })

//   it('should be return 30 from input [1, 3, 5]', () => {
//     expect(30).toEqual(evenLast([1, 3, 5]))
//   })

//   it('should be return 36 from input [6]', () => {
//     expect(36).toEqual(evenLast([6]))
//   })

//   it('should be return -18 from input [6, 5, 3, -2]', () => {
//     expect(-18).toEqual(evenLast([6, 5, 3, -2]))
//   })
// })

// function evenLast(numArray) {
//   if(numArray.length === 0) {
//     return 0
//   }

//   const evenNum = numArray.filter((_, index) => index % 2 === 0)
//   const sumEvenNum = evenNum.reduce((prev, cur) => prev + cur)
//   const lastNum = numArray.slice(-1)

//   return sumEvenNum * lastNum
// }