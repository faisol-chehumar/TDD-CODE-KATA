// // For the input of your function, you will be given one sentence.
// // You have to return a corrected version, that starts with a capital letter
// // and ends with a period (dot).

// // Pay attention to the fact that not all of the fixes are necessary.
// // If a sentence already ends with a period (dot), then adding another one will be a mistake.

// // Input: A string.

// // Output: A string.

// describe(`Start sentence with Capital letter and end with period.`, () => {
//   it(`Should return "Greetings, friends." when input is 'greetings, friends.'`, () => {
//     expect('Greetings, friends.').toEqual(correctSentence('greetings, friends.'))
//   })

//   it(`Should return "Greetings, friends." when input is 'Greetings, friends.'`, () => {
//     expect('Greetings, friends.').toEqual(correctSentence('Greetings, friends.'))
//   })

//   it(`Should return "Good morning, mooty." when input is 'good morning, mooty.'`, () => {
//     expect('Good morning, mooty.').toEqual(correctSentence('good morning, mooty.'))
//   })

//   it(`Should return "Good morning, mooty." when input is 'Good morning, mooty.'`, () => {
//     expect('Good morning, mooty.').toEqual(correctSentence('Good morning, mooty.'))
//   })

//   it(`Should return "Greetings, friends." when input is 'greetings, friends'`, () => {
//     expect('Greetings, friends.').toEqual(correctSentence('greetings, friends'))
//   })

//   it(`Should return "Greetings, friends." when input is 'greetings, friends'`, () => {
//     expect('Greetings, friends.').toEqual(correctSentence('Greetings, friends'))
//   })
// })

// function correctSentence(sentence) {
//   return sentence[0].toUpperCase() + sentence.slice(1) + (sentence[sentence.length - 1] !== '.'? '.': '');
// }
