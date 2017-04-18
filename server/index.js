var express = require('express')
var path = require('path')
var open = require('open')
var chalk = require('chalk')

var port = 3000
var app = express()
console.log(chalk.green('dev server initializing'))
console.log(chalk.green('PORT: '+ port))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err){
  if (err) {
    console.log(chalk.red(err))
  } else {
    var url = 'http://localhost:' + port
    console.log(chalk.blue('Server Ready'))
    console.log(chalk.blue('Opening at ' + url))
    open(url)
  }
})
