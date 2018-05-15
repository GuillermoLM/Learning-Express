const express = require("express");
const app = express();

app.get('/', (req, res) => res.send("Hello World!"));
app.get('/quienessomos', (req, res) => res.send("Quienes somos"));
app.get('/hola/:name', (req, res) => {
    var name = req.params.name;
    res.send(`hola ${name}`);
});
app.get('/multiplica/:m1/:m2', (req, res) => {
    var m1 = req.params.m1;
    var m2 = req.params.m2;
    res.send(`la multiplicación da: ${m1 * m2}`);
});

//Ejercicios
//Ej 1
app.get('/multiplication/:num1/:num2', (req, res) => {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    if(isNaN(num1) === true)
    {
        res.send("Debes introducir un numero");
    }
    else if(isNaN(num2) === true)
    {
        res.send("Debes introducir un numero");
    }
    else
    {
        res.send(`la multiplicación da: ${num1 * num2}`);
    }
});

//Ej 2
app.get('/junta/:m3/con/:m4', (req, res) => {
    var m3 = req.params.m3;
    var m4 = req.params.m4;
    res.send("El mensaje unido es: " + (m3 + m4));
});

//Ej 3
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that");
});

app.listen(3000,() => console.log('Servidor levantado en 3000'));