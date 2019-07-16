// You are given an array with positive numbers and a number N. You should find
// the N-th power of the element in the array with the index N.
// If N is outside of the array, then return -1. Don't forget that the first element
// has the index 0.

// Let's look at a few examples:
// - array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// - array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// Input: Two arguments. An array as a list of integers and a number as a integer.
// Output: The result as an integer.

describe('Calculate the result from value in the array of index N power with number N.', function() {
  it('should return relsult 9 when given number N is 2 and value with index 2 in [1, 2, 3, 4] is 3.', function() {
    expect(powerWithNumberN([1, 2, 3, 4], 2)).toEqual(9)
  })

  it('should return relsult 8 when given number N is 3 and value with index 3 in [5, 1, 3, 2] is 3.', function() {
    expect(powerWithNumberN([5, 1, 3, 2], 3)).toEqual(8)
  })

  it('should return relsult 8 when given number N is 1 and value with index 1 in [5, 1, 3, 2] is 1.', function() {
    expect(powerWithNumberN([5, 1, 3, 2], 1)).toEqual(1)
  })

  it('should return relsult 8 when given number N is 0 and value with index 0 in [5, 1, 3, 2] is 0.', function() {
    expect(powerWithNumberN([5, 1, 3, 2], 0)).toEqual(1)
  })

  it('should return relsult -1 when given number N is 0 and value with index 0 in [5, 1, 3, 2] is 0.', function() {
    expect(powerWithNumberN([5, 1, 3, 2], 4)).toEqual(-1)
  })

  it('should return relsult 1 when given number N is 0 and value with index 0 in [0, 1, 3, 2] is 0.', function() {
    expect(powerWithNumberN([0, 1, 3, 2], 0)).toEqual(1)
  })
})

function powerWithNumberN(arr, num) {
  return num >= arr.length ? -1 : arr[num] ** num
}
