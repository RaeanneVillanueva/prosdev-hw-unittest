const { gradeClassifier } = require('./index')

describe('Classifying a grade', () => {
  test('When grade is 95 to 100, it will return O', () => {
    expect(gradeClassifier(98)).toBe('O')
  })

  test('When grade is 90 to 94.99, it will return V', () => {
    expect(gradeClassifier(93)).toBe('V')
  })

  test('When grade is 85 to 89.99, it will return G', () => {
    expect(gradeClassifier(88.55)).toBe('G')
  })

  test('When grade is 80 to 84.99, it will return S', () => {
    expect(gradeClassifier(81)).toBe('S')
  })

  test('When grade is 75 to 79.99, it will return N', () => {
    expect(gradeClassifier(76.99)).toBe('N')
  })
  test('When grade is under 75, it will return D', () => {
    expect(gradeClassifier(74)).toBe('D')
  })
})
