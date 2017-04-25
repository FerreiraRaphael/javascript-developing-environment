/**
 * Created by raphael on 23/04/17.
 */
import jsf from 'json-schema-faker'
import {schema} from '../spec/mockDataSchema'
import fs from 'fs'
import chalk from 'chalk'

const json = JSON.stringify(jsf(schema))
fs.writeFile('./src/api/db.json', json, err => {
  if (err) {
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green("Mock data generated."))
  }
})
