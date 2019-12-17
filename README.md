# Watering Schedule
A program for creating a plant watering schedule based around work schedule.


## Getting Started
```
npm install
npm start
```
Wanted to make sure I was using minimal dependencies.
With nodemon, if any changes are made to the given JSON file, the schedule will automatically print again.


## Testing
To run tests from root directory:
```
npm test
```
Started with tests to make sure I was parsing my JSON correctly. 
```javascript
  it('`getPlants` should return an array from parsed JSON of plants', () => {
    expect(plantsArray).to.be.an('array')
  })
```
Then moved on to testing dates. Found cases in which to test repetition by week that were not affected by weekend. Made sure no plants were watered on weekends.
```javascript
it('Plants must not be watered on Saturdays or Sundays', () => {
    dates.forEach(date => {
      if (String(date).startsWith('Sat' || 'Sun')){
        expect(schedule[date]).to.be.an('array').that.has.lengthOf(0)
      }
    })
  })
```
Worked to pass (and fail) these tests. Made sure that tests would be helpful for future growth of the application.

## Speed Bumps 
* Researched date manipulation and found best option for implementation
* Decided how to import and parse local JSON file
* What kind of user interface would be best?
* Trying to minimize dependencies

### Author
[Andrea Soloko](https:/linkedin.com/in/soloko)

