const {expect} = require('chai')
const {getPlants, getWateringGroups, createSchedule} = require('../app')
const plantsArray = getPlants()
const wateringGroups = getWateringGroups([...plantsArray])
const schedule = createSchedule(wateringGroups)

describe('App', () => {
  const dates = Object.keys(schedule)
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

  it('When time between watering is divisible by 7, day to be watered is monday', () => {
    const sevenDayClub = wateringGroups['7']
    dates.forEach(date => {
      if (String(date).startsWith('Mon')){
        for (let i = 0; i < sevenDayClub.length; i++){
          expect(schedule[date]).to.include(sevenDayClub[i])
        }
      }
    })
  })
  it('All plants must be watered on first Monday', () => {
    expect(schedule['Mon Dec 23 2019']).to.have.lengthOf(plantsArray.length)
  })
  it('Plants must not be watered on Saturdays or Sundays', () => {
    dates.forEach(date => {
      if (String(date).startsWith('Sat' || 'Sun')){
        expect(schedule[date]).to.be.an('array').that.has.lengthOf(0)
      }
    })
  })
})
