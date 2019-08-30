// // In this mission you should write a function that introduce a person with
// // a given parameters in attributes.
// // Input: Two arguments. String and positive integer.
// // Output: String.
// // Example:
// // sayHi("Alex", 32) == "Hi. My name is Alex and I'm 32 years old"
// // sayHi("Frank", 68) == "Hi. My name is Frank and I'm 68 years old"

// describe("Introduce a person with a given parameters in attributes.", function() {

//   it('should return introduce sentence from person his name is Alex and his age is 37.', function() {
//     const introduceSent = 'Hi. My name is Alex and I\'m 32 years old'

//     expect(sayHi('Alex', 32)).toEqual(introduceSent)
//   })

//   it('should return introduce sentence from person his name is Frank and his age is 68.', function() {
//     const introduceSent = 'Hi. My name is Frank and I\'m 68 years old'

//     expect(sayHi('Frank', 68)).toEqual(introduceSent)
//   })

//   it('should return introduce sentence from person his name is Mim and his age is 32.', function() {
//     const introduceSent = 'Hi. My name is Mim and I\'m 32 years old'

//     expect(sayHi('Mim', 32)).toEqual(introduceSent)
//   })

//   // ไม่ควรมีการ Validate field ใน Func เพราะผิดหลักการ Single responsibility principle

//   it('should return "Name is require" when missing name parameter. Because name is use in sentence ', function() {
//     expect(() => {
//       sayHi(null, 32)
//     }).toThrowError('name is require')
//   })

//   it('should return "Age is require" when missing age parameter. Because age is use in sentence ', function() {
//     expect(() => {
//       sayHi('Mim', null)
//     }).toThrowError('age is require')
//   })
// })

// function sayHi(name, age) {
//   const params = [name, age]
//   const paramName = getArgs(sayHi)

//   params.forEach((param, index) => {
//     if(param === null) {
//       throw new Error(`${paramName[index]} is require`)
//     }
//   })

//   return `Hi. My name is ${name} and I'm ${age} years old`
// }

// function getArgs(func) {
//   const args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1]

//   return args.split(',').map(function(arg) {
//     return arg.replace(/\/\*.*\*\//, '').trim()
//   }).filter(function(arg) {
//     return arg
//   })
// }
