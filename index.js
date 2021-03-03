// const greeting = require('./greeting.js')

// greeting()

// const movies = require('./movies.js')

// console.log(movies)

// const chalk = require('chalk')

// console.log(chalk.blue('Hello World!'))

const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'person',
    message: 'What is your name?'
  }, {
    type: 'number',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'list',
    name: 'pet',
    message: 'Choose your favorite type of pet',
    choices: ['dog', 'cat', 'lizard', 'bird', 'snail']
  }
])
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err))