import { canRearrange } from './can-rearrange'

test.each([
  [1, ''],
  ['', 2],
])('throws if invalid args are passed', (a, b) => {
  // @ts-expect-error
  expect(() => canRearrange(a, b)).toThrowError('Invalid args')
})

test.each([
  ['', ''],
  ['  ', ' '],
  ['anything', ''],
  ['abc', 'cb'],
  ['listen', 'silent'],
  ['a gentleman', 'elegant man'],
  ['funeral', 'realfun'],
  ['bored', 'robed'],
  ['astronomer', 'moonstarer'],
])('"%s" matches "%s"', (a, b) => {
  expect(canRearrange(a, b)).toBe(true)
})

test.each([
  ['', ' '],
  ['a', 'A'],
  ['abc', 'cbaa'],
  ['abcdefg', 'abcdefz'],
])('"%s" does not match "%s"', (a, b) => {
  expect(canRearrange(a, b)).toBe(false)
})
