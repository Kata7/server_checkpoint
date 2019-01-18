const express = require('express')
const app = express()
const port = 8000
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Import data from data.json
let data = require('./data.json')

// If no tag, return all data
app.get('/', (req, res) => res.send(data))

// Send data specified by user-submitted tag
app.get('/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase()
  const filteredList = data.albums.filter(album => album.genre.includes(genre))
  if (filteredList.length !== 0) {
    res.status(200).send(filteredList)
  } else {
    res.status(404).send(`Try one of these genres: ${data.genres}`)
  }

})

// This is a skeleton post method
app.post('/', (req, res, next) => {
  res.status(200).send('Thank you for the post')
  console.log(req.body)
})


// If route does not exist, send 404 error
app.use((req, res, next) => {
  res.status(404).send('Route does not exist')
})

// Allow the server to receive requests
app.listen(port, () => console.log(`Server is listening on port: ${port}`))