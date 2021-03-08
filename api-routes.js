// api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to MovieDB crafted with love!'
    });
});

// Import movie controller
var movieController = require('./movieController');
// Contact routes
router.route('/movies')
    .get(movieController.index)
    .post(movieController.new);
router.route('/movies/:movie_id')
    .get(movieController.view)
    .patch(movieController.update)
    .put(movieController.update)
    .delete(movieController.delete);

// Export API routes
module.exports = router;