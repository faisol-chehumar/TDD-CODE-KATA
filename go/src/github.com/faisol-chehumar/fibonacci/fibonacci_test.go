package fibonacci

import (
	"testing"
)

func TestFibonacci(t *testing.T) {
	t.Run("Input 1 ShouldBeDisplay 1", func(t *testing.T) {
		v := Fibonacci(1)

		if 1 != v {
			t.Error("fibonacci of 1 should be '1' but have", v)
		}
	})
}
