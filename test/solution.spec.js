import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Solution } from '../src/solution'

describe('Solution', () => {
  const sut = new Solution()

  const testMatrix = {
    9: 2,
    529: 4,
    20: 1,
    15: 0,
    32: 0,
    1041: 5
  }

  describe('#solution', () => {
    Object.keys(testMatrix).forEach(input => {
      describe(`when given ${input}`, () => {
        const expected = testMatrix[input]
        it(`returns ${expected}`, () => {
          expect(sut.solution(input)).to.eq(expected)
        })
      })
    })
  })
})
