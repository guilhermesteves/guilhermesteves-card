#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const newline = '\n'
const uname = 'guilhermesteves' // meu username

const data = {
  head: {
    key: chalk.white('         Guilherme Esteves |'),
    value: chalk.rgb(0, 172, 238).bold(`@${uname}`),
  },
  work: {
    key: chalk.rgb(0, 188, 158).bold('      Work:'),
    value: chalk.white('Software Engineer at PagSeguro'),
  },
  web: {
    key: chalk.rgb(0, 87, 146).bold('       Web:'),
    value: chalk.white(`https://${uname}.dev/`),
  },
  twitter: {
    key: chalk.rgb(0, 172, 238).bold('   Twitter:'),
    value: chalk.white(`https://twitter.com/${uname}`),
  },
  github: {
    key: chalk.rgb(250, 251, 252).bold('    GitHub:'),
    value: chalk.white(`https://github.com/${uname}`),
  },
  medium: {
    key: chalk.rgb(87, 173, 64).bold('    Medium:'),
    value: chalk.white(`https://medium.com/@${uname}`),
  },
  instagram: {
    key: chalk.rgb(152, 84, 191).bold(' Instagram:'),
    value: chalk.white(`https://www.instagram.com/${uname}`),
  },
  linkedin: {
    key: chalk.rgb(14, 118, 168).bold('  LinkedIn:'),
    value: chalk.white(`https://www.linkedin.com/in/${uname}`),
  },
  card: {
    key: chalk.rgb(205, 59, 41).bold('      Card:'),
    value: chalk.white(`npx ${uname}`),
  },
}

const output = [
  `${data.head.key} ${data.head.value}`,
  newline,
  newline,
  `${data.work.key} ${data.work.value}`,
  newline,
  newline,
  `${data.web.key} ${data.web.value}`,
  newline,
  `${data.github.key} ${data.github.value}`,
  newline,
  `${data.twitter.key} ${data.twitter.value}`,
  newline,
  `${data.medium.key} ${data.medium.value}`,
  newline,
  `${data.instagram.key} ${data.instagram.value}`,
  newline,
  `${data.linkedin.key} ${data.linkedin.value}`,
  newline,
  newline,
  `${data.card.key} ${data.card.value}`,
].join('')

const options = {
  padding: 5,
  margin: 5,
  borderStyle: 'double',
  float: 'center',
  borderColor: '#005792',
  backgroundColor: 'black',
}

console.log(chalk.green(boxen(output, options)))
