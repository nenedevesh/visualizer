import * as fs from 'fs'
import express from 'express'

let obj = new Promise<object>((resolve,reject) => {
    fs.readFile("jsondata.json", (err, data) => {
        resolve(JSON.parse(data.toString()))
        reject(err)
    })
})

const app = express()

app.get("/api", async(req,res) => {
    console.log(Object.keys(await obj))
    res.send(await obj)
})


app.listen(8000, () => console.log("Server Started @ http://localhost:8000/api"))
