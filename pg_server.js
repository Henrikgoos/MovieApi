import express from 'express' ;
import pg from  'pg';
import dotenv from 'dotenv';
dotenv.config();

var app = express();
app.use(express.json());

const {Client} = pg;
const client = new Client();

Connect();

async function Connect(){
    try {
        await client.connect();
        console.log('Database yhdistetty..')

    } catch (error) {
        console.log('error');
    }
}
app.get('/movies', async (req,res) => {
    try{
        const result = await client.query('SELECT * FROM movie')
        res.json(result.rows)
        console.log('There you go')
    } catch(error) {
        console.log(error.message);
    }
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveri pyörii')
})
app.get('/', (req,res) => {
    res.send('This is endpoint!')
});

