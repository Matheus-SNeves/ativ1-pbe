const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/mercadoria', (req, res) => {
    const { mercadoria, preco } = req.body;
    
    if(preco < 1000){
        precofinal = preco * 1.05;
        res.json({mercadoria:mercadoria, precofinal: precofinal})
    } else{
        precofinal = preco * 1.07;
        res.json({mercadoria:mercadoria, precofinal: precofinal})
    }
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});