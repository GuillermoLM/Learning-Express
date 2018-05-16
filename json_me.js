const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books',(req,res) => {
    var filename = process.argv[3];
    fs.readFile(filename, function(error, data)
    {
        if(error)
        {
            return res.sendStatus(500); //500 = Internal Server Error
        } 
        try
        {
            books = JSON.parse(data);
        }
        catch (error)
        {
            res.sendStatus(500) //500 = Internal Server Error
        }
        res.json(books);    
    });
});
app.listen(process.argv[2]);