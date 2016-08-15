import restify = require('restify');
import { SwitchModel } from './../models/switch.model';
import { Switch } from './../models/switch';

export default class SwitchController {
    constructor(private switchModel: SwitchModel) {}
    
    status(req: restify.Request, res: restify.Response, next: restify.Next) {
        let id = req.params['id'];
        let _switch: Switch = this.switchModel.get(id);
        if (_switch) {
            res.json(200, {status: _switch.status});
        }
        else {
            res.json(200, {error: "unknown key"});
        }
        return next();
    }
    
    toggle(req: restify.Request, res: restify.Response, next: restify.Next) {
            res.json(200, 'pong');
            return next();
    }   
    
    //{"name":"Spot light chillarea","button":1,"status":"off","on":{"code":123456,"bit":24,"protocol":1,"delay":180},"off":{"code":654321,"bit":24,"protocol":1,"delay":180}}
    add(req: restify.Request, res: restify.Response, next: restify.Next) {
            res.json(200, 'pong');
            return next();
    }    
}
