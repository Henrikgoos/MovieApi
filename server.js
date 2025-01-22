import express from 'express' ;


var app = express();




const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveri pyörii')
})

app.get('/movies', (req,res) => {
    try{
        const result = ('Select * FROM Movies')
        res.json(result.rows)
    }
    catch(console){
        console.error('Error fetching movies',error);
        res.status(500).send('Error fetching movies')
        
    }
    
    res.send('Here is movies')
    console.log('Toimii')
})

