const express = require('express');
const MoviesService = require('./../services/movies');
//rutas como recibe parametros y como los envia a los services 


function movieApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService()

    router.get('/', async function(req,res,next){
        const { tags } = req.query;
        try{
            const movie = await moviesService.getMovies({tags});

            res.status(200).json({
                data: movie,
                menssage: 'movie listed'
            });
        }catch(err){
            next(err);
        }
    });

    router.get('/:movieId', async function(req,res,next){
        const { movieId } = req.params;
        try{
            const movie = await moviesService.getMovie({movieId});

            res.status(200).json({
                data: movie,
                menssage: 'movie retrieved'
            });
        }catch(err){
            next(err);
        }
    });

    router.post('/', async function(req,res,next){
        const { body: movie } = req;
        try{
            const createdMovieId = moviesService.createMovie({movie});

            res.status(201).json({
                data: createdMovieId,
                menssage: 'movie created'
            });
        }catch(err){
            next(err);
        }
    });

    router.put('/:movieId', async function(req,res,next){
        const { movieId } = req.params;
        const { body: movie } = req;
        try{
            const updateMovieId = await moviesService.updateMovie({ movieId, movie });

            res.status(200).json({
                data: updateMovieId,
                menssage: 'movie update'
            });
        }catch(err){
            next(err);
        }
    });

    router.delete('/:movieId', async function(req,res,next){
        const { movieId } = req.params;
        try{
            const deleteMovie = await moviesService.deleteMovie({ movieId });

            res.status(200).json({
                data: deleteMovie,
                menssage: 'movie deleted'
            });
        }catch(err){
            next(err);
        }
    });
};

module.exports = movieApi;