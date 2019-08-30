package fizzbuzz

import (
	"testing"
)

// func TestInput1ShouldBeDisplay1(t *testing.T) {
// 	t.Run("Input 1 ShouldBeDisplay 1", func(t *testing.T) {
// 		v := FizzBuzz(1)
// 		if "1" != v {
// 			t.Error("fizzbuzz of 1 should be '1' but have", v)
// 		}
// 	})
// }

func TestInput2ShouldBeDisplay2(t *testing.T) {
	v := FizzBuzz(2)
	if "2" != v {
		t.Error("fizzbuzz of 2 should be '2' but have", v)
	}
}

func TestInput3ShouldBeDisplayFizz(t *testing.T) {
	v := FizzBuzz(3)
	if "Fizz" != v {
		t.Error("fizzbuzz of 3 should be 'Fizz' but have", v)
	}
}

func TestInput6ShouldBeDisplayFizz(t *testing.T) {
	v := FizzBuzz(6)
	if "Fizz" != v {
		t.Error("fizzbuzz of 6 should be 'Fizz' but have", v)
	}
}

func TestInput5ShouldBeDisplayBuzz(t *testing.T) {
	v := FizzBuzz(5)
	if "Buzz" != v {
		t.Error("fizzbuzz of 5 should be 'Buzz' but have", v)
	}
}

func TestInput15ShouldBeDisplayBuzz(t *testing.T) {
	v := FizzBuzz(15)
	if "FizzBuzz" != v {
		t.Error("fizzbuzz of 15 should be 'FizzBuzz' but have", v)
	}
}
