var name = "Ryan";
var age = process.env.age;


const fetch = require('node-fetch');
let url = 'https://api.mailerlite.com/api/v2/stats';


exports.handler = async function (event, context) {
    let response
    console.log(age)

    let options = {
        method: 'GET',
        headers: {
            'X-MailerLite-ApiKey': process.env.MAILERLITE_API,
            'Content-Type': 'application/json',
            cookie: '__cfduid=dad2df4050816509a1c800f83de36ac9e1610460936; PHPSESSID=5da696f5fa0b60cb7b4010863c1ffc3f; '
        }
    };
    response = await fetch(url, options)
        .then(data => data.json())


    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}