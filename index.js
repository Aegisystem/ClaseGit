const express = require('express');

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(port, () => {
  console.log(`Corriendo`);
})