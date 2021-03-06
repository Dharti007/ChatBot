const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))

const REQUIRE_AUTH = true

app.listen(app.get('port'), function () {
  console.log('* Webhook service is listening on port:' + app.get('port'))
})

app.get('/', function (req, res) {
  res.send('Use the /webhook endpoint.')
})

app.get('/webhook', function (req, res) {
  res.send('You must POST your request')
})

app.post('/webhook', function (req, res) {

  // if (REQUIRE_AUTH) {
  // if (req.headers['auth-token'] !== AUTH_TOKEN) {
  //   return res.status(401).send('Unauthorized')
  // }
  // }
  if (!req.body || !req.body.queryResult || !req.body.queryResult.parameters) {
    return res.status(400).send('Bad Request')
  }

  var webhookReply = 'Hello dharti '

  res.status(200).json({
    "fulfillmentText": "This is a sample response from your webhook!"
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    "Hello I m Responding to intent"
                ]
            }
        }
    ]
    ,"source":""
  })
})
