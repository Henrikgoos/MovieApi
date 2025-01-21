import express from 'express' ;
import {pgPool} from 'pg_server.js';

var app =pgPool();
var app = express();
app.use(express,json());




app.listen(3001, () => {
    console.log('The server is running!');
})

app.get('/movies', (req,res) => {
    res.send('Here is movies')
    console.log('Toimii')
})

