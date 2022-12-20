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

app.get('/list', (req, res) => {
    res.render("board/list.html")
})

app.get('/write', (req, res) => {
    res.render('board/write.html')
})

app.get('/view', (req, res) => {
    res.render('board/view.html')
})

app.get('/modify', (req, res) => {
    res.render("board/modify.html")
})

app.listen(3000, (req, res) => {
    console.log("서버열림!")
})