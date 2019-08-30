package main

import (
	"fmt"
)

func main() {
	tarnslate("1")
}

func tarnslate(str string) string {
	// m := map[string]string{
	// 	"1":  "๑",
	// 	"2":  "๒",
	// 	"3":  "๓",
	// 	"4":  "๔",
	// 	"5":  "๕",
	// 	"6":  "๖",
	// 	"7":  "๗",
	// 	"8":  "๘",
	// 	"9":  "๙",
	// 	"10": "๑๐",
	// }
	// var result []stringx
	for _, v := range str {
		fmt.Println(v)
		// result = append(result, strings.Replace(str, v, m[v], -1))
	}

	// return strings.Join(result[:], "")
	return "0"
}
