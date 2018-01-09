const express = require('express')
const app = express()
const src = require('./html/template.js')
// const renderCoreHtml = require('./html')

// app.get('/', (req, res) => res.send('Now I need to put the view material on here right?'))

app.get('/', function (req, res) { 
    res.send(src())
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))