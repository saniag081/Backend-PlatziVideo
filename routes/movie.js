const express = require('express');
const {moviesMock} = require('../utils/mocks/movies');

function movieApi(app){
    const router = express.Router();
    app.use('/api/movies', router);


    router.get('/', async function(req,res,next){
        try{
            const movie = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movie,
                menssage: 'movie listed'
            });
        }catch(err){
            console.log(err);
        }
    });
};

module.exports = movieApi;