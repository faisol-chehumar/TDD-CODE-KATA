package main

import (
	"encoding/csv"
	"fmt"
	"io/ioutil"
	"log"
	"strconv"
	"strings"
)

func main() {
	dat, err := ioutil.ReadFile("student_grade.csv")

	if err != nil {
		log.Fatal(err)
	}

	r := csv.NewReader(strings.NewReader(string(dat)))

	records, err := r.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	records = records[1:]

	for _, row := range records {
		var g float64
		if s, err := strconv.ParseFloat(row[7], 64); err == nil {
			g = s
		}
		fmt.Println(row[0], grade(int(g)))
	}

}

// Grade is func
func grade(num int) string {
	if num >= 91 {
		return "A"
	}

	if num >= 81 {
		return "B"
	}

	if num >= 71 {
		return "C"
	}

	if num >= 61 {
		return "D"
	}

	return "F"
}
