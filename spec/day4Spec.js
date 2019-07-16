// You are given a positive integer. Your function should calculate
// the product of the digits excluding any zeroes.
// For example: The number given is 123405. The result will be 1*2*3*4*5=120
// (don't forget to exclude zeroes).

// Input: A positive integer.
// Output: The product of the digits as an integer.

describe('Calculate product of digit exclude zero.', () => {
  it('should return 120 from given number 123405 because it must exclude zero before calulate', () => {
    expect(digitsMultip(123405)).toEqual(120)
  })

  it('should return 600 from given number 12340505 because it must exclude zero before calulate', () => {
    expect(digitsMultip(12340505)).toEqual(600)
  })

  it('should return 1 from given number 101010 because it must exclude zero before calulate', () => {
    expect(digitsMultip(101010)).toEqual(1)
  })

  it('should return 1 from given number 0001 because it must exclude zero before calulate', () => {
    expect(digitsMultip(0001)).toEqual(1)
  })

  it('should return 0 from given number 00000 because it must exclude zero before calulate', () => {
    expect(digitsMultip(00000)).toEqual(0)
  })

  // it('should return 3 from given number 00300 because it must exclude zero before calulate', () => {
  //   expect(digitsMultip(00300)).toEqual(3)
  // })
})

function digitsMultip(num) {
  if(num === 0) {
    return 0
  }

  const numString = num.toString(10)

  return [...numString]
    .filter(elm => elm !== '0')
    .reduce((prev, cur) => {
      return prev * cur
    }, 1)
}
