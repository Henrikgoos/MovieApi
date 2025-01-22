import express from 'express' ;
import pg from  'pg';


var app = express();
app.use(express.json());


const {Client} = pg;
const client = new Client({
    user: 'postgres',
    password: 'heka',
    database: 'postgres',
    localhost: 'localhost',
    port: 5432,
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveri pyörii')
})
app.get('/', (req,res) => {
    res.send('This is endpoint!')
});
app.get('/movies', (req,res) => {
    res.send('Here is movies')
    console.log('Toimii')
});
