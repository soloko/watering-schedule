const fs = require('fs')

const getPlants = () => {
  return JSON.parse(fs.readFileSync('Apprentice_WeGrowInTandem_Data.json'))
}

const getWateringGroups = () => {
  const plantsArray = getPlants()
  const groups = {}
  plantsArray.forEach(plant => {
    const days = plant.water_after.split(' ')[0]
    if (!groups[days]) {
      groups[days] = [plant.name]
    } else {
      groups[days].push(plant.name)
    }
  })
  return groups
}

const getDates = () => {
  const today = new Date(Date.now())
  let daysWatered = 0
  let dates = {}
  while (daysWatered++ < (12 * 7)) {
    dates[today] = 0
    today.setDate(today.getDate() + 1)
  }
  return dates
}

console.log(getWateringGroups())


module.exports = {
  getPlants,
  getWateringGroups
}

