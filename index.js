const express = require('express');

const app = express();

//const porta = process.env.PORT | | 3333;
const porta = 3333;

app.listen(porta, () => {
    console.log('servidor iniciado na porta'  + porta);
    //console.log(`Servidor iniciado na porta ${porta}`);
});