const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Para acessar o certificado, acesse: http://localhost:3000/certificado')
})

app.get('/author-name', (req, res) => {
  res.send('Rógenis Pereira da Silva')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 