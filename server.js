const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

const items = [{
    subject: "첫번쨰 게시물",
    content: "content",
    name: "name",
},
]

app.use(express.urlencoded({ extended: false })) // client에서 주는게 만들어 주지 않고 바디파서를 통해서 우리에게 넘겨줌

app.get('/', (req, res) => {
    const { name } = req.query
    res.render("index.html", { name })
})

app.get('/list', (req, res) => {
    res.render("board/list.html", { items })
}) // 내가 데이터를 어떠한 형태로 만들래, 일단 가짜 db할것

app.get('/write', (req, res) => {
    res.render('board/write.html')
}) // 특정 데이터를 어떻게 만들어 줄래

app.post('/write', (req, res) => {
    const { content, subject, name } = req.body
    items.push({ content, subject, name })
    res.redirect(`/view?index=${items.length - 1}`)
})


app.get('/view', (req, res) => {
    const { index } = req.query

    res.render('board/view.html', { items: items[index] })
}) // 특정 데이터 어떻게 보여줄래

app.get('/modify', (req, res) => {
    res.render("board/modify.html")
}) // view + write가 합쳐진것

app.listen(3000, (req, res) => {
    console.log("서버열림!")
})