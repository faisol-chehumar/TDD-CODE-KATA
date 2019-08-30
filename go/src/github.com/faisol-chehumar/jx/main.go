// package main

// import (
// 	"encoding/json"
// 	"encoding/xml"
// 	"fmt"
// 	"io/ioutil"
// 	"log"
// )

// func main() {
// 	b, err := ioutil.ReadFile("users.json")
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	var users Users
// 	err = json.Unmarshal(b, &users)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	err = xml.MarshalIndent(&users, " ", " ")
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	fmt.Println(string(b))
// }

