const router = require('express').Router();

// this page will consist of router.get functions 
// these functions will display the appropriate .handlebars page

// homepage, blank endpoint
router.get('/', async (req, res) => {
    res.render('home');
});

module.exports = router;