const bodyParser = require('body-parser')
const express = require('express')
//const favicon = require('serve-favicon')
const src = require('./html/template.js')



let app = express()
//app.use(favicon('cryptominion.ico'))

const port = process.env.PORT || 3000

app = require('./webpack').pack(app)

app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use('/static', express.static('./static'))



app.get('/', function (req, res) { 
    res.send(src())
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))