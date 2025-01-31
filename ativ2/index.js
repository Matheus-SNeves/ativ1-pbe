const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/salarioinss', (req, res) => {
    const { salario } = req.body;
    if (salario <= 1212.00) {
        const salariofinal = salario - (0.075*salario);
        res.json({ salariofinal: salariofinal });
    } else if (salario >= 1212.01 && salario <= 2427.35) {
        const salariofinal = salario - (0.09*salario);
        res.json({ salariofinal: salariofinal });
    } else if (salario >= 2427.36 && salario <= 3641.03) {
        const salariofinal = salario - (0.12*salario);
        res.json({ salariofinal: salariofinal });
    } else {
        const salariofinal = salario - (0.14*salario);
        res.json({ salariofinal: salariofinal });
    }
});



app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});