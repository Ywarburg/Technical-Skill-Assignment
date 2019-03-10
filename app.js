/**This file is meant to make our handling a bit easier using express**/
const express = require('express');
const app = express();

const helloRout = require('./api/routs/hello');//for call /hello
const headlineRout = require('./api/routs/headline');//for call /headline
const subtitleRout = require('./api/routs/subtitle');//for call /subtitle

//**Incoming requests must ENTER HERE**/
app.use('/hello', helloRout);
app.use('/headline', headlineRout);
app.use('/subtitle', subtitleRout);

/*Although using localhost, we want to have the option to extend out of localhost. For that, we want to avoid 'CORS' errors.
*I will be honest, I don't understand this part fully*/
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*"/*Allow access to everyone at the moment*/);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requeted-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET');
        return res.status(200).json({});
    }
    next();
});

/**If arrived here, no route was matched to a handlers created-> catch the error**/
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
/**If arrived here, an unhandled error/ecxeption was thrown from anywhere in the code, we will arrive in this handler**/
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
})
module.exports = app; 