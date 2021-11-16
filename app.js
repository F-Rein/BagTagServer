const http = require('http');
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const hostname = '127.0.0.1';
const port = 3001;

app.listen(3001, () => {
  console.log('Server is running on Port 3001');
});

function myFunc() {
  fetch('https://bagtag-9ef2c-default-rtdb.europe-west1.firebasedatabase.app/.json', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"test2":"bulle"})
  });
}

setTimeout(myFunc, 1000);
