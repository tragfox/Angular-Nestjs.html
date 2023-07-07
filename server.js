const express = require('express')
const { listen } = require('express/lib/application')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index4.html")
})

app.listen(4000, () => console.log('server is running.....'))