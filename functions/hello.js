const https = require("https");

const options = {
  "method": "GET",
  "hostname": "api.netlify.com",
  "port": null,
  "path": "/api/v1/sites/ryandejaegher.com/submissions",
  "headers": {
    "content-length": "0",
    "authorization": "Bearer t4scZdWivtlx9SaaUwLQhpAfCAqvlSIQVvhDAtRao9Y"
  }
};




exports.handler = function(event, context, callback) {

    const req = https.request(options, (res) => {
        let body = '';
        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            if (res.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            callback(null, body);
        });
    });
    req.on('error', callback);
    req.write(JSON.stringify(event.data));
    req.end();
}