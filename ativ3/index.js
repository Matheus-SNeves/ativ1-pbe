const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/triangulo', (req, res) => {
    const { ladoA, ladoB, ladoC } = req.body;

    if (ladoA == ladoB && ladoA == ladoC) {
        const { resultado } = res.body;
        res.json({ resultado: 'equilatero' });
    } else if (ladoA != ladoB && ladoA == ladoC || ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA) {
       
        res.json({ resultado: 'isosceles' });
    } else {
        
        res.json({ resultado: 'escaleno' });
    }
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});