export class PebbleService{   
    mockKeys = {
        'Windows': 'http://127.0.0.30/toggle',
        'Kitchen': 'http://127.0.0.1:3030/switch/5/toggle',
        'Table': 'http://127.0.0.1:3030/switch/1/toggle',
        'Toilet': 'http://127.0.0.1:3030/switch/3/toggle',
        'Octopus': 'http://127.0.0.1:3030/switch/4/toggle'
    };
    
    parse(key: string) {
        let url: string = this.mockKeys[key];
        console.log(url);
        if (url) {
            this.sendCode(url);
        }
        return url;
    }
    
    sendCode(url: string) {
        console.log('sendCode');
        var http = require('http'); // we should use typed import..
        http.get(url, (response) => {
            console.log(`Got response: ${response.statusCode}`);
            response.resume(); 
        }).on('error', (e) => {
            console.log(`Got error: ${e.message}`);
        }).end();        
    }
}