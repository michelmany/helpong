const express = require("express");

const app = express();

app.get("/", (request, response) => {
    return response.json({
        event: "Semana OmniStack 11.0",
        aluno: "Michel Moraes"
    });
});

app.listen(3333);
