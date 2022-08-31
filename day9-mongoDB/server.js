const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;
const MONGO_DB_URL = 'mongodb+srv://user:1234@cluster0.2vaxtuu.mongodb.net/?retryWrites=true&w=majority'
const connectToDB = async () => {
    mongoose.connect(MONGO_DB_URL,
       err => {
        if (err) throw err ;
        console.log('connecting to mongoDB Database')
       } );
}
connectToDB();

app.listen(PORT , function(){
    console.log('server running on port',PORT);
});