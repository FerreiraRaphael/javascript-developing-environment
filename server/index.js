import express from 'express'
import path from 'path'
import open from 'open'
import chalk from 'chalk'

let port = 3000
const app = express()
console.log(chalk.green('dev server initializing'))
console.log(chalk.green('PORT: '+ port))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err){
  if (err) {
    console.log(chalk.red(err))
  } else {
    let url = `http://localhost:${port}`
    console.log(chalk.blue('Server Ready'))
    console.log(chalk.blue('Opening at ' + url))
    open(url)
  }
})
