import { name } from './package.json';
import config from 'config';
import express from 'express';
import favicon from 'express-favicon';
import { join as joinPath } from 'path';

let app = express()
			.use(express.static(joinPath(__dirname, 'public')));
			//.use(favicon(__dirname + '/public/favicon.ico'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
	//res.send('Hello world');
	res.render('layout', {data: {title: 'hey'}});
});

let server = app.listen(
  config.get('port'),
  config.get('host'),
  () => console.log(`${name} started ${JSON.stringify(server.address())}`)
);