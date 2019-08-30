package day7

import (
	"testing"
)

func TestInputShouldBeDisplayTotalPoint(t *testing.T) {
	t.Run("Input ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'] Should Display 30", func(t *testing.T) {
		m := [10]string{"1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"}
		v := Points(m)
		if 30 != v {
			t.Error("Points of result should be 30 but have", v)
		}
	})
}
