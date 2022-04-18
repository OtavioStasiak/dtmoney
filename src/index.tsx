import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
        id: 121309,
        title: 'Freelance de Website',
        type: 'deposit',
        category: 'dev',
        amount: 6000,
        createdAt: new Date('2022-04-25 10:20:00')
      },
      {
        id: 1,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'House',
        amount: 1400,
        createdAt: new Date('2022-04-10 10:20:00')
      },
    ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
}); 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
