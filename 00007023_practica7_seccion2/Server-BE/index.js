const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());           
app.use(express.json());    


app.get('/', (req, res) => {
  res.send('Servidor Express funcionando correctamente');
});


app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola desde el servidor Express' });
});


app.post('/api/echo', (req, res) => {

  const body = req.body;
  console.log('POST /api/echo body:', body); 
  res.json({ recibido: body, status: 'OK' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
