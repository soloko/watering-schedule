/* eslint-disable complexity */
/* eslint-disable guard-for-in */
const fs = require('fs')

const getPlants = () => {
  return JSON.parse(fs.readFileSync('Apprentice_WeGrowInTandem_Data.json'))
}

const getWateringGroups = (plantsArray = getPlants()) => {
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

const getDates = (startDate = new Date(2019, 11, 23), weeks = 12) => {
  let daysWatered = 0
  let dates = {}
  while (daysWatered++ < (weeks * 7)) {
    dates[startDate.toDateString()] = []
    startDate.setDate(startDate.getDate() + 1)
  }
  return dates
}


const createSchedule = (plantGroups = getWateringGroups()) => {
  const dates = getDates()
  const groupNumbers = Object.keys(plantGroups)
  const counters = {}
  groupNumbers.forEach(num => {
    counters[num] = 1
  })

  for (let date in dates){
    if (String(date) === 'Mon Dec 23 2019') {
      dates[date] = groupNumbers.reduce((accumulator, num) => {
        return accumulator.concat(plantGroups[num])
      }, [])
    } else {
      for (let num in counters){
        const day = new Date(date).getDay()
        const isWeekday = () => {
          return day !== 0 && day !== 6
        }
        const counterMod = counters[num] % num
        const currentCounter = counters[num]
        if (counterMod === 0 && isWeekday()){
          // we are at a weekday with exact watering timing
          dates[date].push(...plantGroups[num])
          counters[num] = 1
        } else if (currentCounter + 1 === Number(num) && day === 5){
          // it's friday and we would water on a saturday, so water today
          dates[date].push(...plantGroups[num])
          counters[num] = 1
        } else if (currentCounter === Number(num) + 1 && day === 1) {
          // it's monday and we missed watering on sunday, so water today
          dates[date].push(...plantGroups[num])
          counters[num] = 1
        } else {
          counters[num]++
        }
      }
    }
  }

  return dates
}

console.log(createSchedule())


module.exports = {
  getPlants,
  getWateringGroups,
  createSchedule
}

