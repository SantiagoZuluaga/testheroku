//Dependencias
const express = require("express");
const app = express();
const path = require("path");

//Middlewares
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.static(path.join(__dirname, './build/')));

//Routes
app.get('/*/', (req, res, error) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})

//Start
app.listen(app.get('port'), () => {
    console.log("Stating server");
})