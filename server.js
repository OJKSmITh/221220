const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.get('/', (req, res) => {
    const { name } = req.query
    res.render("index.html", { name })
})

app.listen(3000, (req, res) => {
    console.log("서버열림!")
})