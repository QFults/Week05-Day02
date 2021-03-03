// const greeting = require('./greeting.js')

// greeting()

// const movies = require('./movies.js')

// console.log(movies)

// const chalk = require('chalk')

// console.log(chalk.blue('Hello World!'))

const inquirer = require('inquirer')

let people = []

const question = () => {
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
    },
    {
      type: 'confirm',
      name: 'choice',
      message: 'Continue?'
    }
  ])
    .then(res => {
      console.log(res)
      people.push(res)
      if (res.choice) {
        question()
      } else {
        console.log(people)
      }
    })
    .catch(err => console.log(err))
}

question()
