const express = require('express')
const cors = require('cors');
const app = express();
require("dotenv").config();
const path = require('path')
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/home', (req, res) => {
    res.send("home")
})

if (process.env.NODE_ENV == 'production') {
    const path = require('path')

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')))
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log("server started at :", port)
})