const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
  res.send('Hola como estas');
})



app.use('/products', require('./routes/Products'));

app.listen(port, () => console.log('Escuchando en... http://localhost:' + port));
