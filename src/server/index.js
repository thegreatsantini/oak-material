const express = require('express')
const app = express()
const src = require('./src/server/html/')
const renderCoreHtml = require('./html')

app.get('/', (req, res) => res.send('Now I need to put the view material on here right?'))

app.get('./src/server/html', function (req, res) { 
    res.send('index.html')
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))