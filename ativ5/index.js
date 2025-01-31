const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/maiornumero', (req, res) => {
    const { I, II, III, IV, V, VI } = req.body;
    let maiorNumero = I;
    
    if(maiorNumero < II){
        maiorNumero = II
    }
    if(maiorNumero < III){
        maiorNumero = III
    }
    if(maiorNumero < IV){
        maiorNumero = IV
    }
    if(maiorNumero < V){
        maiorNumero = V
    }
    if(maiorNumero < VI){
        maiorNumero = VI
    }

    res.json({ maiorNumero : maiorNumero });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});