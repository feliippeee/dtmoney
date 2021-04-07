import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transaction: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-04-05 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'witdraw',
          category: 'casa',
          amount: 730,
          createdAt: new Date('2021-04-06 09:30:00'),
        }
      ],
    })
  },
  routes(){
    this.namespace = 'api'; // api do transations, informando que quer usar apartir desse endereço ou seja api
    this.get('/transactions', () => {
     return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

