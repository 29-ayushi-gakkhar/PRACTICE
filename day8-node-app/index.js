//console.log('our first app');

// es -5 syntax
const express = require('express');
const app = express();
const port = 8000;


app.get('/',(request , response) => {
    response.send('hello world');
});




app.listen(port , function (){
    console.log('server is running on port', port );
});
