const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))
app.get('/style', (req, res) => res.sendFile(clientDir + "style.css"))
app.get('/teknik', (req, res) => res.send('EK sux'))
app.get('/yeezus', (req, res) => res.sendFile(clientDir + "haha.jpg"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function consoleForm(event) {
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    console.log("Namn: " +  data.value + "\n" + "Email: " + email.value);
}