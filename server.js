const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(3000, (req, res) => {
    console.log("서버열림!")
})