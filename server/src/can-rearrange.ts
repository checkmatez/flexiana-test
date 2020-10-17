import assert from 'assert'

export const canRearrange = (a: string, b: string): boolean => {
  assert(typeof a === 'string', 'Invalid args')
  assert(typeof b === 'string', 'Invalid args')

  if (a.length < b.length) {
    return false
  }

  const aSorted = a.split('').sort().join()
  const bSorted = b.split('').sort().join()

  return aSorted.includes(bSorted)
}
