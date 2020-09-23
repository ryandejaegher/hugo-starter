exports.handler = function(event, context, callback) {
     let json = {
         name: "ryan",
         age: 31
     };
    callback(null, {
    statusCode: 200,
    body: JSON.stringify(json)
    });
}