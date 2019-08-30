package fizzbuzz

import (
	"strconv"
)

// FizzBuzz : fizzbuzz function
func FizzBuzz(number int) string {
	if number%15 == 0 {
		return "FizzBuzz"
	}

	if number%3 == 0 {
		return "Fizz"
	}

	if number%5 == 0 {
		return "Buzz"
	}

	return strconv.Itoa(number)
}
