import restify = require('restify');
import { PebbleService } from './../services/pebble.service';

export default class PebbleController {
    constructor(private pebbleService: PebbleService) {}    
    
    test(req: restify.Request, res: restify.Response, next: restify.Next) {
        console.log(req.query['text']);
        if (this.pebbleService.parse(req.query['text'])) {
            console.log('ok');
            res.json(200, {keyStatus: 0, keyText: "Sent"});
        }
        else {
            console.log('nok');
            res.json(200, {keyStatus: 101, keyText: "Unknown"});
        }
        return next();
    }         
}
