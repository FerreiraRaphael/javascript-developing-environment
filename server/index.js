import express from 'express'
import path from 'path'
import open from 'open'
import chalk from 'chalk'
import webpack from 'webpack'
import config from '../webpack.config.dev'
const debug = require('debug')('app:server:dev')

let port = 3000
const app = express()
const compiler = webpack(config)

debug(`Staring web server at PORT: ${port}`)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', (req, res) => {
  // Hard coding for simplicity, Pretend this hits a real database
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName":"Tammy", "lastName":"Norton", "email":"tammy@gmail.com"},
    {"id": 3, "firstName":"Tina", "lastName":"Lee", "email":"tina@gmail.com"},
  ])
})

app.listen(port, err => {
  if (err) {
    debug(chalk.red(err))
  } else {
    let url = `http://localhost:${port}`
    debug(`Server listening at ${url}`)
    open(url)
  }
})

//TODO Add env var DEBUG to npm scripts
