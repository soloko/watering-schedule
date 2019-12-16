const fs = require('fs')

const getPlants = () => {
  return JSON.parse(fs.readFileSync('Apprentice_WeGrowInTandem_Data.json'))
}
console.log(getPlants())

module.exports = {
  getPlants
}

