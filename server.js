import dotenv from 'dotenv';
import express from 'express';
import fetch from'node-fetch';
import cors from 'cors';
import cacheService from 'express-api-cache';



const app = express();
const result = dotenv.config()

const cache = cacheService.cache;

app.use(cors());

app.get('/', cache("60 minutes"), (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mississauga&appid=${process.env.API_KEY}&units=metric`)
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            // console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
})

