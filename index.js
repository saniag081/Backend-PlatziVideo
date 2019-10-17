const express = require('express');
const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movie');


moviesApi(app);



app.listen(config.port,async function(){
    console.log(`Listening http://localhost:${config.port}`);
});
