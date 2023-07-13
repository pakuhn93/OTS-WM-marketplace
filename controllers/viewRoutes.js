const router = require('express').Router();

// this page will consist of router.get functions 
// these functions will display the appropriate .handlebars page

// homepage, blank endpoint
router.get('/', async (req, res) => {
    res.render('home');
});

// marketplace url endpoint
router.get('/marketplace', async (req, res) => {
    res.render('marketplace');
});

module.exports = router;