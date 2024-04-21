import express from 'express';

const app = express();

// REST API http://api.controle-de-gastos.com/transactions

 // GET -> chamar  e ver

 app.get('/transactions',(_request, response) => {
    console.log('get transactions');
    response.json([{id: 1}]);
 })
 // post-> cria transação
 // put -> atualiza a transação
 // delete -> deleta uma transação 

app.listen(6666,() => console.log("API inicianada em http://localhost:6666"));