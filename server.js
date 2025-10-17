const express = require("express");
const app = express();
const PORT = 8091;

app.get("/calculadora", (req, res) => {
    try {
        let { operacao, numUm, numDois } = req.query;

        if (!operacao || !numUm || !numDois || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send("Parâmetros inválidos.");
        }

        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);
        let resultado;

        switch (operacao) {
            case "soma":
                resultado = numUm + numDois;
                res.send (`Olá, o resultado da soma é: ${resultado} `)
                break;
            case "subtracao":
                resultado = numUm - numDois;
                res.send (`Olá, o resultado da subtração é: ${resultado} `)
                break;
            case "multiplicacao":
                resultado = numUm * numDois;
                res.send (`Olá, o resultado da multiplicação é: ${resultado} `)
                break;
            case "divisao":
                if (numDois === 0) {
                    return res.status(400).send("Divisão por zero não é permitida.");
                }
                resultado = numUm / numDois;
                res.send (`Olá, o resultado da divisão é: ${resultado} `)
                break;
            default:
                return res.status(400).send("Operação inválida. Use: soma, subtracao, multiplicacao, divisao.");
        }

    } catch (error) {
        res.status(500).send("Erro interno no servidor.");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
