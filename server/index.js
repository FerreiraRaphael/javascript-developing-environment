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

app.listen(port, function(err){
  if (err) {
    debug(chalk.red(err))
  } else {
    let url = `http://localhost:${port}`
    debug(`Server listening at ${url}`)
    open(url)
  }
})

//TODO Add env var DEBUG to npm scripts
