const express = require('express')
const app = express()
const PORT = 3000
app.get('/', (req, res) =>
    res.send('Hello World! DHARSHAN B 7376221CS143'))
app.listen(PORT, () => console.log(
    `Example app listening at http://localhost:${PORT}`
))
