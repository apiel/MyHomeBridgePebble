//require('./decorators/restify.decorator.ts');
import restify = require('restify');
import PebbleController from './controllers/pebble.controller';

import { PebbleService } from './services/pebble.service';

restify.CORS.ALLOW_HEADERS.push('authorization');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.CORS());

let pebbleService = new PebbleService();
let pebbleController = new PebbleController(pebbleService);
server.get('/test', pebbleController.test.bind(pebbleController));

server.listen(3090, function() {
  console.log('%s listening at %s', server.name, server.url);
});