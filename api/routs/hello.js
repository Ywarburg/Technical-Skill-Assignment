/**This file handles /hello requests**/
const express = require('express');
const router = express.Router();

//because name of path goes through 'hello' in variable 'helloRout' in app.js, the get only needs / and not /hello
router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'Hello World'
    });
});
module.exports = router; 