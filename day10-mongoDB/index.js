const express = require('express');
const app = express();

const port = 8000;
const MONGO_DB_URL = 'mongodb+srv://user:1234@cluster0.vj9s5df.mongodb.net/?retryWrites=true&w=majority'
const connectToDB = async () =>
 {
    (MONGO_DB_URL,
       err => {
        if(err) throw err;
        console.log('connecting to mongoDB Database')
     
    });
}
connectToDB();

//app.get('/', (request , response) => 
//{
//    response.send('hello world');
//});

app.listen(port , function() {
    console.log('server running on port', port );
});