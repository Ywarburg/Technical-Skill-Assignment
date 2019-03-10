/**Similar to 'import'**/
const http= require('http');
const app= require('./app');

/**Define which port server should listen to**/
const port= process.env.PORT||3000; //Default port=3000
 
/**Server creation**/
const server=http.createServer(app);

/**Server-listen to-**/
server.listen(port);