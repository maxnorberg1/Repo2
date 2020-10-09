const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))
app.get('/style', (req, res) => res.sendFile(clientDir + "style.css"))
app.get('/teknik', (req, res) => res.send('EK sux'))
app.get('/yeezus', (req, res) => res.sendFile(clientDir + "haha.jpg"))

app.post('/', (req, res) => {
  console.log(req.body.fullname)
  console.log(req.body.email)
  res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

