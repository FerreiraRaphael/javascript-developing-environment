import express from 'express'
import path from 'path'
import open from 'open'
import chalk from 'chalk'
import webpack from 'webpack'
import config from '../webpack.config.dev'

let port = 3000
const app = express()
const compiler = webpack(config)

console.log(chalk.green('dev server initializing'))
console.log(chalk.green('PORT: '+ port))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

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
