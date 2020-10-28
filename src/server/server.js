const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let log = console.log;

//import module router
const sprintRouter = require('./controllers/sprint.js');
//midleware import

mongoose.connect(process.env.MongoURI,{
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
        })
        .then(() =>{log('Connect successful to mongo DB'); })
        .catch(error=>{
            log(error);
        });
                            
//config
const app = express();


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

//const variable
const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;

//switch router for handle request from client
app.use(sprintRouter);

app.listen(PORT,()=> {console.log(`SERVER START: ${HOST_NAME} AT PORT: ${PORT}`)});