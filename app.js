const express = require("express");
const app = express();
const PORT = 8090

app.get("/soma/:numUm/:numDois", (req, res)=>{
    try {
        let {numUm, numDois} = req.params;

        if (numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(400).send(`Número inválido`)
        }

        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);

        res.send(`Olá, você está somando ${numUm} + ${numDois}, e o resultado é  ${numUm + numDois}`)
    } catch (error) {
        
    }
});


app.get("/subtracao/:numUm/:numDois", (req, res)=>{
    try {
        let {numUm, numDois} = req.params;

        if (numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(400).send(`Número inválido`)
        }

        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);

        res.send(`Olá, você está subtraindo ${numUm} - ${numDois}, e o resultado é  ${numUm - numDois}`)
    } catch (error) {
        
    }
});


app.get("/divisao/:numUm/:numDois", (req, res)=>{
    try {
        let {numUm, numDois} = req.params;

        if (numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(400).send(`Número inválido`)
        }

        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);

        res.send(`Olá, você está dividindo ${numUm} / ${numDois}, e o resultado é  ${numUm / numDois}`)
    } catch (error) {
        
    }
});

app.get("/multiplicacao/:numUm/:numDois", (req, res)=>{
     try {
        let {numUm, numDois} = req.params;

        if (numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(400).send(`Número inválido`)
        }

        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);

        res.send(`Olá, você está multiplicando ${numUm} x ${numDois}, e o resultado é  ${numUm * numDois}`)
    } catch (error) {
        
    }
});
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});