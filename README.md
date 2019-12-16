# Watering Schedule
A program tool for plant watering schedule.


## Getting Started
```
npm install
npm start
```
Wanted to make sure I was using minimal dependencies.
With nodemon, if any changes are made to the given JSON file, the schedule will automatically print again.


## Testing
To run tests from root directory:
`npm test`
Started with tests to make sure I was parsing my JSON correctly. Then moved on to testing dates. Found cases in which to test repetition by week that were not affected by weekend. Found cases to test patterns that required differentiating based on weekends. Worked to pass (and fail) these tests. Made sure that tests would be helpful for future growth of the application.

## Speed Bumps 
* Researched date manipulation and found best option for implementation
* Decided how to import and parse local JSON file
* What kind of user interface would be best?
* Trying to minimize dependencies

