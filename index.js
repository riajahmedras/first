const express = require('express');

const app = express();

// function rootCall(req, res){
//    res.send('Thank you very much')
// }

// const rootCall = (req, res) => res.send('Thank you very much');



app.get('/', (req, res) => {
   const fruit = {
      product: 'Mango',
      price: 100
   }
   res.send(fruit);
})
app.get('/fruits/banana', (req, res) => {
   res.send({fruit: 'banana', quantity: 1000, price: 3000});
})


app.listen(3001, () => console.log('listening to port 3000'));