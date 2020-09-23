exports.handler = function(event, context, callback) {
     let json = {
         name: "ryan",
         age: 31
     };

     let formJSON;

     const http = require("https");

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
     
     const req = http.request(options, function (res) {
       const chunks = [];
     
       res.on("data", function (chunk) {
         chunks.push(chunk);
       });
     
       res.on("end", function () {
         const body = Buffer.concat(chunks);
         formJSON = body
         console.log(body.toString());
       });
     });
     
     req.end();

    callback(null, {
    statusCode: 200,
    body: formJSON
    });
}