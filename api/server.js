const express = require('express')
const AWS = require('aws-sdk');

const app = express()
const port = 3000

const getParameter = async () => {
  try {
    const ssm = new AWS.SSM({
      region: 'eu-central-1'
    })
    const parameter = await  ssm.getParameter({ 
          Name: '/Test/username', 
          WithDecryption: false 
      }).promise();

      return parameter?.Parameter?.Value
    
  } catch (error) {
    console.log('something went wrong: ', error);
  }
    }
    
let secret
getParameter().then(result => secret = result).catch(err => console.log('Err', err))

app.get('/ip', (req, res) => {
  return res.json({ip: req.ip})
})

app.get('/secret', (req, res) => {
  return res.json({secret})
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
