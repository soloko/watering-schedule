const {expect} = require('chai')
const {getPlants} = require('../app')
const plantsArray = getPlants()
const plant = {
  name: 'test plant',
  water_after: '21 days',
  extraKey: 'one more thing'
}

describe('App', () => {
  it('`getPlants` should return an array from parsed JSON of plants', () => {
    expect(plantsArray).to.be.an('array')
  })
  it('Plant object in array should have `name` and `water_after` keys', () => {
    for (let i = 0; i < plantsArray.length; i++){
      expect(plantsArray[i]).to.be.an('object').that.includes.all.keys('name', 'water_after')
    }
    expect(plant).to.include.all.keys('name', 'water_after')
  })
  xit('When time between watering is divisible by 7, day to be watered is monday', () => {

  })
  xit('All plants must be watered on first Monday', () => {

  })
})
