// describe(`You are given two strings and you have to find an index of
// the second occurrence of the second string in the first one.`, () => {
//   it(`Should return 3 when string is 'sims' and given parameter is s`, () => {
//     expect(3).toEqual(findIndexOfTheSecondString('sims', 's'))
//   })

//   it(`Should return 12 when string is 'find the river' and given parameter is e`, () => {
//     expect(12).toEqual(findIndexOfTheSecondString('find the river', 'e'))
//   })

//   it(`Should return 10 when string is 'find the river' and given parameter is i`, () => {
//     expect(10).toEqual(findIndexOfTheSecondString('find the river', 'i'))
//   })

//   it(`Should return undifined when string is 'find the river' and given parameter is z`, () => {
//     expect(undefined).toEqual(findIndexOfTheSecondString('find the river', 'z'))
//   })

//   it(`Should return undifined when string is 'river' and given parameter is ' '`, () => {
//     expect(undefined).toEqual(findIndexOfTheSecondString('river', ' '))
//   })

//   it(`Should return 8 when string is 'find the river' and given parameter is ' '`, () => {
//     expect(8).toEqual(findIndexOfTheSecondString('find the river', ' '))
//   })

//   it(`Should return undefined when string is 'find the river' and given parameter is 'f'`, () => {
//     expect(undefined).toEqual(findIndexOfTheSecondString('find the river', 'f'))
//   })
// })

// function findIndexOfTheSecondString(string, targetString) {
//   const indexOfTargetString = string.replace(targetString, '').indexOf(targetString)

//   return indexOfTargetString < 0
//     ? undefined
//     : indexOftargetString + 1
// }
