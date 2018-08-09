import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';

//import devConfig from './config/dev';
//import prodConfig from './config/prod';
import fallback from 'express-history-api-fallback'
import compression from 'compression';

let app = express();
app.use(compression());

var PORT = +process.env.PORT || 8080;
var NODE_ENV = process.env.NODE_ENV || 'production';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

if (NODE_ENV === 'production'){
	app.use(fallback(path.join(__dirname, '../client/index.html')));
}
else{
	app.use(fallback(path.join(__dirname, '../index.html')));
}


app.listen(PORT, function(err){
	if (err) throw err;
	console.log(`Server is Listening on port ${PORT} in ${NODE_ENV} mode`);
});

export default app;