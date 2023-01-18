const express = require('express')
const app = express()
const port = 3000

app.get('/ip', (req, res) => {
  return res.json({ip: req.ip})
})
app.use(express.static('../frontend/dist'))

const startServer = port => {
 try {
   app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
 } catch (error) {
  console.log('An error has ocurred: ', error)
 }
}

startServer(port)
