import express from 'express' ;
import pg from 'pg'


var app = express();
app.use(express.json())



const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveri pyörii')
})

app.get('/movies', (req,res) => {
    res.send('Here is movies')
    console.log('Toimii')
    try{
        const result = ('Select * FROM Movies')
        res.json(result.rows)
    }
    catch(console){
        console.error('Error fetching movies',error);
        res.status(500).send('Error fetching movies')
        
    }
    
})

