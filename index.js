const express = require('express')
const app = express()
const port = 3000
// định nghĩa tuyến đường /trang-chu 
app.get('/tin-tuc', (req, res) => {

  var a =1
  var b = 3
  var c = a + b
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})