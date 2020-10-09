const express = require('express')
const dBModule = require('./dBModule')
const personModel = require('./PersonModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index.ejs', {name: ' Max'})
})

app.get('/', (req, res) => {
  res.sendFile(clientDir + "index.html")
})

app.get('/stilen', (req, res) => {
  res.sendFile(clientDir + "style.css")
})

app.get('/jesus', (req, res) => {
  res.sendFile(clientDir + "download.jpg")
})

app.post('/', (req, res) => {

  let person = personModel.createPerson(req.body.name, req.body.email, req.body.age)
  
  dBModule.storeElement(person)

  res.render('pages/index.ejs', {name: ' ' + req.body.name})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 
