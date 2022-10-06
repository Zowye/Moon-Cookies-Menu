const express = require("express");
const port = 2020;
const path = require('path');
const dotenv = require("dotenv");


const app = express();

dotenv.config({ path: './.env' })

const publicDirectory = path.join(__dirname, './public');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.static(publicDirectory))


console.log("all korrect");


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`Server is running...`);
});