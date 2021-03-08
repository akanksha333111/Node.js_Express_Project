// movieController.js

// Import movie model
Movie = require('./movieModel');

// Handle index actions
exports.index = function (req, res) {
    Movie.get(function (err, movies) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log("Retrieved data" + movies);
        res.json({
            status: "success",
            message: "Movies retrieved successfully",
            data: movies
        });
    });
};

// Handle create movie actions
exports.new = function (req, res) {
    var movie = new Movie();
    movie.name = req.body.name ? req.body.name : movie.name;
    movie.img = req.body.img;
    movie.summary = req.body.summary;

    // save the movie and check for errors
    movie.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New movie created!',
            data: movie
        });
    });
};

// Handle view movie info
exports.view = function (req, res) {
    Movie.findById(req.params.movie_id, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            message: 'Movie details loading..',
            data: movie
        });
    });
};

// Handle update movie info
exports.update = function (req, res) {
    Movie.findById(req.params.movie_id, function (err, movie) {
        if (err)
            res.send(err);
        movie.name = req.body.name ? req.body.name : movie.name;
        movie.img = req.body.img;
        movie.summary = req.body.summary;
        // save the movie and check for errors
        movie.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Movie Info updated',
                data: movie
            });
        });
    });
};

// Handle delete movie
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.movie_id
    }, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
}