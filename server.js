const express = require('express')
const app = express()
const port = 8000

// Import data from data.json
const data = require('./data.json')

// If no tag, return all data
app.get('/', (req, res) => res.send(data))

// Send data specified by user-submitted tag
app.get('/:tag', (req, res) => {

})



// If route does not exist, send 404 error
app.use((req, res, next) => {
  res.status(404).send('Route does not exist')
})

// Allow the server to receive requests
app.listen(port, () => console.log(`Test server is listening on port: ${port}`))