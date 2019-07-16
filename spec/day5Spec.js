describe('Decoder message program from chunk of text.', () => {
  it(`should return HELLO from message 'How are you? Eh, ok. Low or Lower? Ohhh.'
  because we will extract capital letter from the message.`, () => {
    expect(findMessage('How are you? Eh, ok. Low or Lower? Ohhh.')).toEqual('HELLO')
  })

  it(`should return empty string from message 'how are you?'
  because we will extract capital letter from the message.`, () => {
    expect(findMessage('how are you?')).toEqual('')
  })

  it(`should return empty string from message 'good morning george woshington.'
  because we will extract capital letter from the message.`, () => {
    expect(findMessage('good morning george woshington.')).toEqual('')
  })

  it(`should return GOD from message 'GoOD morning george woshington.'
  because we will extract capital letter from the message.`, () => {
    expect(findMessage('GoOD morning george woshington.')).toEqual('GOD')
  })

  it(`should return MING from message 'good MornIng george woshiNGton.'
  because we will extract capital letter from the message.`, () => {
    expect(findMessage('good MornIng george woshiNGton.')).toEqual('MING')
  })
})

function findMessage(message) {
  return [...message].filter(str => /[A-Z]/.test(str)).join('')
}
