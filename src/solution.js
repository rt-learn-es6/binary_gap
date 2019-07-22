/* eslint-disable class-methods-use-this */
export class Solution {
  solution(n) {
    let calcN = parseInt(n, 10)
    if (calcN > 2147483647 || calcN < 1 || !calcN) {
      throw new Error(`n outside of 1..2,147,483,647 is not supported`)
    }

    calcN = calcN.toString(2)
    calcN = calcN.replace(/0+$/, '')
    calcN = calcN.replace(/1+$/, '')
    calcN = calcN.replace(/^1+/, '')

    let gaps = calcN.split('1')
    gaps = gaps.map(element => element.length)

    return Math.max(...gaps)
  }
}
/* eslint-enable class-methods-use-this */
