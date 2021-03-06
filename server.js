const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("express"));
// default URL for website
app.use('/',  function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
//const port = 3939;
server.listen(process.env.PORT);
//console.debug('Server listening on port ' + port); 