const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/ordemCrescente', (req, res) => {
    const { I, II, III, IV, V } = req.body;
    const numeros = [I, II, III, IV, V];
    const ordemCrescente = numeros.sort((a, b) => a - b);

    res.json({ ordemCrescente });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});