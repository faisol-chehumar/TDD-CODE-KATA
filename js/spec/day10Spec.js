// Let's continue examining words. You are given two string with words separated by commas.
// Try to find what is common between these strings. The words are not repeated in the same string.

// Your function should find all of the words that appear in both strings.
// The result must be represented as a string of words separated by commas in alphabetic order.

// Input: Two arguments as strings.
// Output: The common words as a string.
// commonWords("hello,world", "hello,earth") == "hello"

describe('commonWords', () => {
  it('should be return "Hello" when input is ("hello", "hello")', () => {
    expect(commonWords('hello', 'hello')).toEqual('hello')
  })

  it('should be return "hello,world" when input is ("hello,world", "hello,world")', () => {
    expect(commonWords('hello,world', 'hello,world')).toEqual('hello,world')
  })

  it('should be return "hello" when input is ("hello,world", "hello,goodbye")', () => {
    expect(commonWords('hello,world', 'hello,goodbye')).toEqual('hello')
  })

  it('should be return "hello" when input is ("hello,darling", "hello,dad")', () => {
    expect(commonWords('hello,darling', 'hello,dad')).toEqual('hello')
  })

  it('should be return "eurega" when input is ("eurega,good", "eurega,bad")', () => {
    expect(commonWords('eurega,good', 'eurega,bad')).toEqual('eurega')
  })

  it('should be return "eurega" when input is ("sss,good", "good,aaa")', () => {
    expect(commonWords('sss,good', 'good,aaa')).toEqual('good')
  })

  it('should be return "" when input is ("one,two,three", "four,five,six")', () => {
    expect(commonWords('one,two,three', 'four,five,six')).toEqual('')
  })

  it('should be return "one,three,two" when input is ("one,two,three", "four,five,one,two,six,three")', () => {
    expect(commonWords('one,two,three', 'four,five,one,two,six,three')).toEqual('one,three,two')
  })
})

function commonWords(word1, word2) {
  const uniqueWord1 = [...new Set(word1.split(','))]
  const uniqueWord2 = [...new Set(word2.split(','))]
  const duplicateWords = uniqueWord1.filter(word => uniqueWord2.includes(word))

  return duplicateWords.sort().join(',')
}
