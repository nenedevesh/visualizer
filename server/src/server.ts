import * as fs from 'fs'
import * as util from 'util'

const readFileAsyncThen = util.promisify(fs.readFile)

readFileAsyncThen("jsondata.json")
.then(data => {
    console.log(JSON.parse(data.toString()))
})
.catch(err => console.error(err))
