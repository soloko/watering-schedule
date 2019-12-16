const {expect} = require('chai')
const {getPlants, getWateringGroups} = require('../app')
const plantsArray = getPlants()
const wateringGroups = getWateringGroups()

describe('App', () => {
  it('`getPlants` should return an array from parsed JSON of plants', () => {
    expect(plantsArray).to.be.an('array')
  })
  it('Plant object in array should have `name` and `water_after` keys', () => {
    for (let i = 0; i < plantsArray.length; i++){
      expect(plantsArray[i]).to.be.an('object').that.includes.all.keys('name', 'water_after')
    }
  })
  it('`getWateringGroups` will return a hash table with plants grouped by days for watering', () => {
    expect(wateringGroups[3]).to.include('Bell Pepper Plant')
    expect(wateringGroups[7]).to.not.include('Jade')
    expect(wateringGroups[2]).to.be.an('array')
  })

  xit('When time between watering is divisible by 7, day to be watered is monday', () => {

  })
  xit('All plants must be watered on first Monday', () => {

  })
  xit('Plants cannot have `water_after` days of 0 or 1', () => {

  })
})
