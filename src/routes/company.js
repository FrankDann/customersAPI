var router = require('express').Router();

router.get('/company', (req,res) => {
    res.send(`You have requested a company with the name: ${req.query.name}`);
});

router.get('/company/:name', (req,res) => {
    res.send(`You have requested a company with params: ${req.params.name}`);
});

module.exports = router;