/**This file handles /headline requests**/
const express = require('express');
const router = express.Router();

var scraper = require('./scraper/Scraper');//in order to be able to call function in Scraper.js
var x=scraper.scrape(true);
router.get('/', (req,res,next) => {//path given in app.js, therefore we need only '/'
    res.status(200).json({
        message: x
    });
});
module.exports = router;