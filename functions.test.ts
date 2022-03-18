import { TouchSequence } from "selenium-webdriver"

const {shuffleArray} = require('./utils')

let dummyArr = [1, 2, 3, 4]

describe('shuffleArray should', () => {
      test('should return an array of the same length', () => {
        let returnedArray = shuffleArray(dummyArr)
        expect(returnedArray.length).toEqual(dummyArr.length)
      })
})