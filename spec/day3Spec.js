// You should write a function that will receive a positive integer and return:
// "Fizz Buzz" if the number is divisible by 3 and by 5;
// "Fizz" if the number is divisible by 3;
// "Buzz" if the number is divisible by 5;
// The number as a string for other cases.

// Input: A number as an integer.
// Output: The answer as a string.

describe('Fizz Buzz game.', () => {
  it('should return "Fizz" if input is divisible by 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  })

  it('should return "Fizz" if input is divisible by 3', () => {
    expect(fizzBuzz(6)).toEqual('Fizz');
  })

  it('should return "Buzz" if input is divisible by 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  })

  it('should return "Buzz" if input is divisible by 5', () => {
    expect(fizzBuzz(10)).toEqual('Buzz');
  })

  it('should return "Buzz" if input is divisible by 5', () => {
    expect(fizzBuzz(20)).toEqual('Buzz');
  })

  it('should return "2" if input is cannot divisible by 5 and 3', () => {
    expect(fizzBuzz(2)).toEqual('2');
  })

  it('should return "1" if input is 1. because it cannot divisible by 5 and 3', () => {
    expect(fizzBuzz(1)).toEqual('1');
  })

  it('should return "Fizz Buzz" if input is 15. because it cannot divisible by 5 and 3', () => {
    expect(fizzBuzz(15)).toEqual('Fizz Buzz');
  })

  it('should return "Fizz Buzz" if input is 45. because it cannot divisible by 5 and 3', () => {
    expect(fizzBuzz(45)).toEqual('Fizz Buzz');
  })
})

function fizzBuzz(num) {
  if(num % 5 === 0 && num % 3 === 0) {
    return 'Fizz Buzz'
  }

  if(num % 5 === 0) {
    return 'Buzz'
  }

  if(num % 3 === 0) {
    return 'Fizz'
  }

  return num.toString()
}
